import fs from "fs";
import path from "path";
import YAML from "yaml";
import { itinerary } from "./itinerary";
import type { City, DailyResponse } from "./types";

const YEARS_BACK = 10;

// -----------------------------
// Unit Conversions
// -----------------------------

const cToF = (c: number) => (c * 9) / 5 + 32;
const mmToInches = (mm: number) => mm / 25.4;
const kmhToMph = (kmh: number) => kmh * 0.621371;

// -----------------------------
// Helpers
// -----------------------------

function getDateRange(year: number, startMMDD: string, endMMDD: string) {
  return {
    start: new Date(`${year}-${startMMDD}`),
    end: new Date(`${year}-${endMMDD}`),
  };
}

function inRange(date: Date, start: Date, end: Date) {
  return date >= start && date <= end;
}

async function fetchYearData(
  lat: number,
  lon: number,
  year: number,
): Promise<DailyResponse> {
  const start = `${year}-01-01`;
  const end = `${year}-12-31`;

  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=UTC`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch data for ${year}`);
  }

  return res.json() as Promise<DailyResponse>;
}

// -----------------------------
// Core Logic
// -----------------------------

async function computeCityClimate(city: City) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - YEARS_BACK;

  let maxTemps: number[] = [];
  let minTemps: number[] = [];
  let precipitation: number[] = [];
  let windSpeeds: number[] = [];

  for (let year = startYear; year < currentYear; year++) {
    const data = await fetchYearData(city.lat, city.lon, year);
    const { start, end } = getDateRange(year, city.startMMDD, city.endMMDD);

    data.daily.time.forEach((dateStr, index) => {
      const date = new Date(dateStr);

      if (inRange(date, start, end)) {
        maxTemps.push(data.daily.temperature_2m_max[index]);
        minTemps.push(data.daily.temperature_2m_min[index]);
        precipitation.push(data.daily.precipitation_sum[index]);
        windSpeeds.push(data.daily.windspeed_10m_max[index]);
      }
    });
  }

  const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

  return {
    high_f: Math.round(cToF(avg(maxTemps))),
    low_f: Math.round(cToF(avg(minTemps))),
    avg_daily_precip_in: Number(mmToInches(avg(precipitation)).toFixed(2)),
    avg_max_wind_mph: Math.round(kmhToMph(avg(windSpeeds))),
  };
}

// -----------------------------
// Main
// -----------------------------

async function main() {
  const output: any = { cities: [] };

  for (const city of itinerary) {
    console.log(`🌎 Computing climate for ${city.name}...`);
    const climate = await computeCityClimate(city);

    output.cities.push({
      name: city.name,
      country: city.country,
      slug: city.slug,
      dates: `${city.startMMDD} – ${city.endMMDD}`,
      historical_url: city.historical_url,
      meteoblue_url: city.meteoblue_url,
      meteoblue_widget_url: city.meteoblue_widget_url,
      historical_avg: climate,
    });
  }

  const yamlString = YAML.stringify(output);
  const outputPath = path.join("_data", "patagonia_weather.yml");

  fs.writeFileSync(outputPath, yamlString);

  console.log("✅ Climate data written to _data/patagonia_weather.yml");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
