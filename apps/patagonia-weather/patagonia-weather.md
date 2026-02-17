---
layout: default
title: Patagonia Weather
permalink: /apps/patagonia-weather
hide_in_header: true
---

<h1>Patagonia Trip Weather</h1>

{% for city in site.data.patagonia_weather.cities %}

  <div class="city-weather" style="margin-bottom:2rem;">
    <h2>{{ city.name }} ({{ city.dates }})</h2>

    <!-- Weather widget -->
    <a class="weatherwidget-io"
       href="{{ city.forecast_url }}"
       data-label_1="{{ city.name | upcase }}"
       data-theme="original">
      {{ city.name }}
    </a>

    <!-- Historical averages -->
    {% if city.historical_avg %}
      <ul>
        <li>Avg High: {{ city.historical_avg.high_f }}°F</li>
        <li>Avg Low: {{ city.historical_avg.low_f }}°F</li>
        <li>Avg Precipitation: {{ city.historical_avg.avg_daily_precip_in }} in</li>
        <li>Avg Max Wind: {{ city.historical_avg.avg_max_wind_mph }} mph</li>
      </ul>
    {% endif %}

    <!-- Links to other forecasts -->
    <p>
      <a href="{{ city.forecast_url }}" target="_blank">Forecast (10-day)</a> |
      <a href="{{ city.windy_url }}" target="_blank">Windy Map</a> |
      <a href="{{ city.historical_url }}" target="_blank">Historical Climate</a>
    </p>

  </div>
{% endfor %}

<!-- Weatherwidget.io script -->
<script>
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');
</script>
