// Template literal type for MM-DD
export type MMDD = `${number}${number}-${number}${number}`;

export interface HistoricalAvg {
  high_f: number;
  low_f: number;
  avg_daily_precip_in?: number;
  avg_max_wind_mph?: number;
}

export interface City {
  name: string;
  country: string;
  slug: string; // for Jekyll URLs or IDs
  lat: number;
  lon: number;
  startMMDD: MMDD;
  endMMDD: MMDD;
  historical_url?: string;
  maps_url?: string;
  meteoblue_url?: string;
  meteoblue_widget_url?: string;
  historical_avg?: HistoricalAvg;
}

export interface DailyResponse {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    windspeed_10m_max: number[];
  };
}
