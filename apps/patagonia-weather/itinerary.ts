import type { City } from "./types";

export const itinerary: City[] = [
  {
    name: "Santiago",
    country: "Chile",
    slug: "santiago",
    lat: -33.45,
    lon: -70.67,
    startMMDD: "02-25",
    endMMDD: "02-27",
    forecast_url: "https://forecast7.com/en/n33d45n70d67/santiago/?unit=us",
    windy_url: "https://www.windy.com/33.45,-70.67",
    historical_url:
      "https://www.timeanddate.com/weather/chile/santiago/climate",
  },
  {
    name: "Puerto Natales",
    country: "Chile",
    slug: "puerto-natales",
    lat: -51.73,
    lon: -72.51,
    startMMDD: "02-28",
    endMMDD: "03-01",
    forecast_url:
      "https://forecast7.com/en/n51d73n72d51/puerto-natales/?unit=us",
    windy_url: "https://www.windy.com/51.73,-72.51",
    historical_url:
      "https://www.timeanddate.com/weather/chile/puerto-natales/climate",
  },
  {
    name: "Torres del Paine",
    country: "Chile",
    slug: "torres-del-paine",
    lat: -50.94,
    lon: -73.41,
    startMMDD: "03-01",
    endMMDD: "03-05",
    forecast_url:
      "https://forecast7.com/en/n50d94n73d41/torres-del-paine/?unit=us",
    windy_url: "https://www.windy.com/50.94,-73.41",
    historical_url:
      "https://www.timeanddate.com/weather/chile/torres-del-paine/climate",
  },
  {
    name: "El Calafate",
    country: "Argentina",
    slug: "el-calafate",
    lat: -50.34,
    lon: -72.26,
    startMMDD: "03-07",
    endMMDD: "03-08",
    forecast_url: "https://forecast7.com/en/n50d34n72d26/el-calafate/?unit=us",
    windy_url: "https://www.windy.com/50.34,-72.26",
    historical_url:
      "https://www.timeanddate.com/weather/argentina/el-calafate/climate",
  },
  {
    name: "El Chaltén",
    country: "Argentina",
    slug: "el-chalten",
    lat: -49.33,
    lon: -72.89,
    startMMDD: "03-09",
    endMMDD: "03-12",
    forecast_url: "https://forecast7.com/en/n49d33n72d89/el-chalten/?unit=us",
    windy_url: "https://www.windy.com/49.33,-72.89",
    historical_url:
      "https://www.timeanddate.com/weather/argentina/el-chalten/climate",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    slug: "buenos-aires",
    lat: -34.6,
    lon: -58.38,
    startMMDD: "03-14",
    endMMDD: "03-16",
    forecast_url: "https://forecast7.com/en/n34d60n58d38/buenos-aires/?unit=us",
    windy_url: "https://www.windy.com/34.60,-58.38",
    historical_url:
      "https://www.timeanddate.com/weather/argentina/buenos-aires/climate",
  },
];
