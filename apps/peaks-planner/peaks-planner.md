---
layout: default
title: Peaks Planner
permalink: /apps/peaks-planner/
hide_in_header: true
---

<section class="peaks-app">
  <p>
    <a class="apps-link" href="https://www.mountain-forecast.com" target="_blank" rel="noopener noreferrer">Mountain Forecast</a>
    |
    <a class="apps-link" href="https://forecast.weather.gov" target="_blank" rel="noopener noreferrer">Weather.gov</a>
    |
    <a class="apps-link" href="https://www.14ers.com" target="_blank" rel="noopener noreferrer">14ers.com</a>
    |
    <a class="apps-link" href="https://www.alltrails.com" target="_blank" rel="noopener noreferrer">AllTrails</a>
  </p>

  <section class="peaks-grid">
    {% for peak in site.data.peaks.peaks %}
    <article class="peaks-card">
      <h2>{{ peak.name }}</h2>

      <div class="peaks-links">
        {% if peak.mountain_forecast_url and peak.mountain_forecast_url != "" %}
        <a class="apps-link" href="{{ peak.mountain_forecast_url }}" target="_blank" rel="noopener noreferrer">
          Mountain forecast weather
        </a>
        {% endif %}

        {% if peak.weather_gov_url and peak.weather_gov_url != "" %}
        <a class="apps-link" href="{{ peak.weather_gov_url }}" target="_blank" rel="noopener noreferrer">
          Weather.gov
        </a>
        {% endif %}

        {% if peak.fourteeners_url and peak.fourteeners_url != "" %}
        <a class="apps-link" href="{{ peak.fourteeners_url }}" target="_blank" rel="noopener noreferrer">
          14ers.com
        </a>
        {% endif %}
      </div>

      <div class="peaks-alltrails">
        <h3>AllTrails</h3>
        {% if peak.alltrails_urls and peak.alltrails_urls.size > 0 %}
          {% for trail_url in peak.alltrails_urls %}
          <a class="apps-link" href="{% if trail_url.url %}{{ trail_url.url }}{% else %}{{ trail_url }}{% endif %}" target="_blank" rel="noopener noreferrer">
            {% if trail_url.name %}{{ trail_url.name }}{% else %}Trail {{ forloop.index }}{% endif %}
          </a>
          {% endfor %}
        {% endif %}
      </div>
    </article>
    {% endfor %}

  </section>
</section>
