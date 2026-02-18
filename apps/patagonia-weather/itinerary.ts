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
    date_label: "Wed Feb 25 – Fri Feb 27",
    historical_url:
      "https://www.timeanddate.com/weather/chile/santiago/climate",
    meteoblue_url: "https://www.meteoblue.com/en/weather/week/santiago_chile_3871336",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/santiago_chile_3871336?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
  {
    name: "Puerto Natales",
    country: "Chile",
    slug: "puerto-natales",
    lat: -51.73,
    lon: -72.51,
    startMMDD: "02-28",
    endMMDD: "03-01",
    date_label: "Sat Feb 28 – Sun Mar 1",
    historical_url:
      "https://www.timeanddate.com/weather/%403874958/climate",
    meteoblue_url:
      "https://www.meteoblue.com/en/weather/week/puerto-natales_chile_3874958",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/puerto-natales_chile_3874958?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
  {
    name: "Torres del Paine (Overview)",
    country: "Chile",
    slug: "torres-del-paine-overview",
    lat: -51.0389,
    lon: -73.1244,
    startMMDD: "03-01",
    endMMDD: "03-05",
    date_label: "Sun Mar 1 – Thu Mar 5",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Torres%20del%20Paine%20National%20Park%2C%20Chile",
    meteoblue_url:
      "https://www.meteoblue.com/en/weather/week/torres-del-paine_chile_7536052",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/torres-del-paine_chile_7536052?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
  {
    name: "Refugio Chileno",
    country: "Chile",
    slug: "w-trek-day-1-chileno",
    lat: -50.9572451,
    lon: -72.9106479,
    startMMDD: "03-01",
    endMMDD: "03-01",
    date_label: "Sun Mar 1",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Refugio%20Chileno%2C%20Torres%20del%20Paine%2C%20Chile",
  },
  {
    name: "Refugio Frances",
    country: "Chile",
    slug: "w-trek-day-2-frances",
    lat: -51.0260641,
    lon: -73.0272705,
    startMMDD: "03-02",
    endMMDD: "03-02",
    date_label: "Mon Mar 2",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Refugio%20Frances%2C%20Torres%20del%20Paine%2C%20Chile",
  },
  {
    name: "Refugio & Camping Vertice Paine Grande",
    country: "Chile",
    slug: "w-trek-day-3-paine-grande",
    lat: -51.0726521,
    lon: -73.0937822,
    startMMDD: "03-03",
    endMMDD: "03-03",
    date_label: "Tue Mar 3",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Refugio%20%26%20Camping%20Vertice%20Paine%20Grande%2C%20Torres%20del%20Paine%2C%20Chile",
  },
  {
    name: "Refugio Grey",
    country: "Chile",
    slug: "w-trek-day-4-grey",
    lat: -51.0021595,
    lon: -73.181325,
    startMMDD: "03-04",
    endMMDD: "03-04",
    date_label: "Wed Mar 4",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Refugio%20Grey%2C%20Torres%20del%20Paine%2C%20Chile",
  },
  {
    name: "Refugio Grey / Hotel Grey",
    country: "Chile",
    slug: "w-trek-day-5-grey-hotel-grey",
    lat: -51.1228794,
    lon: -73.1163257,
    startMMDD: "03-05",
    endMMDD: "03-05",
    date_label: "Thu Mar 5",
    include_historical: false,
    maps_url:
      "https://www.google.com/maps/search/?api=1&query=Hotel%20Lago%20Grey%2C%20Torres%20del%20Paine%2C%20Chile",
  },
  {
    name: "El Calafate",
    country: "Argentina",
    slug: "el-calafate",
    lat: -50.34,
    lon: -72.26,
    startMMDD: "03-07",
    endMMDD: "03-08",
    date_label: "Sat Mar 7 – Sun Mar 8",
    historical_url:
      "https://www.timeanddate.com/weather/argentina/el-calafate/climate",
    meteoblue_url:
      "https://www.meteoblue.com/en/weather/week/el-calafate_argentina_3858677",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/el-calafate_argentina_3858677?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
  {
    name: "El Chaltén",
    country: "Argentina",
    slug: "el-chalten",
    lat: -49.33,
    lon: -72.89,
    startMMDD: "03-09",
    endMMDD: "03-12",
    date_label: "Mon Mar 9 – Thu Mar 12",
    historical_url:
      "https://www.timeanddate.com/weather/%406690180/climate",
    meteoblue_url:
      "https://www.meteoblue.com/en/weather/week/el-chalten_argentina_6690180",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/el-chalten_argentina_6690180?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    slug: "buenos-aires",
    lat: -34.6,
    lon: -58.38,
    startMMDD: "03-14",
    endMMDD: "03-16",
    date_label: "Sat Mar 14 – Mon Mar 16",
    historical_url:
      "https://www.timeanddate.com/weather/argentina/buenos-aires/climate",
    meteoblue_url:
      "https://www.meteoblue.com/en/weather/week/buenos-aires_argentina_3435910",
    meteoblue_widget_url:
      "https://www.meteoblue.com/en/weather/widget/daily/buenos-aires_argentina_3435910?days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=1&layout=dark",
  },
];
