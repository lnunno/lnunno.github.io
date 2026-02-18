---
layout: default
title: Patagonia Weather
permalink: /apps/patagonia-weather/
hide_in_header: true
---

<h1>Patagonia Trip Weather</h1>
<p>
  Each city section shows a <strong>7-day forecast</strong> plus <strong>historical averages for the exact trip dates listed</strong>.
</p>

{% for city in site.data.patagonia_weather.cities %}

  <div class="city-weather" style="margin-bottom:2rem;">
    <h2>{{ city.name }} ({{ city.date_label | default: city.dates }})</h2>

    {% if city.itinerary_notes %}
      <ul>
        {% for note in city.itinerary_notes %}
          <li>{{ note }}</li>
        {% endfor %}
      </ul>
    {% endif %}

    <!-- Weather widget -->
    {% if city.meteoblue_widget_url %}
      <iframe
        title="Meteoblue forecast for {{ city.name }}"
        src="{{ city.meteoblue_widget_url }}"
        frameborder="0"
        scrolling="no"
        style="width:100%;max-width:100%;height:420px;border-radius:8px;border:1px solid #ddd;">
      </iframe>
    {% endif %}

    <!-- Historical averages for exact trip dates -->
    {% if city.historical_avg %}
      <p>
        Historical climate averages below are calculated for <strong>{{ city.dates }}</strong>.
      </p>
      <ul>
        <li>Avg High: {{ city.historical_avg.high_f }}°F</li>
        <li>Avg Low: {{ city.historical_avg.low_f }}°F</li>
        <li>Avg Precipitation: {{ city.historical_avg.avg_daily_precip_in }} in</li>
        <li>Avg Max Wind: {{ city.historical_avg.avg_max_wind_mph }} mph</li>
      </ul>
    {% endif %}

    <!-- Links to other forecasts -->
    <p>
      {% if city.meteoblue_url %}<a href="{{ city.meteoblue_url }}" target="_blank">Meteoblue Forecast (Next 7 Days)</a>{% endif %}
      {% if city.maps_url %} | <a href="{{ city.maps_url }}" target="_blank">Google Maps</a>{% endif %}
      {% if city.historical_url %} | <a href="{{ city.historical_url }}" target="_blank">Historical Climate</a>{% endif %}
    </p>

  </div>
{% endfor %}
