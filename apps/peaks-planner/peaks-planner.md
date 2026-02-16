---
layout: default
title: Peaks Planner
permalink: /apps/peaks-planner/
hide_in_header: true
---

<section class="peaks-app">
  <section class="peaks-grid">
    {% for peak in site.data.peaks.peaks %}
    <article class="peaks-card">
      <h2>{{ peak.name }}</h2>

      <div class="peaks-links">
        {% if peak.mountain_forecast_url and peak.mountain_forecast_url != "" %}
        <a class="apps-link" href="{{ peak.mountain_forecast_url }}" target="_blank" rel="noopener noreferrer">
          Mountain forecast weather <i class="fa fa-arrow-right"></i>
        </a>
        {% endif %}

        {% if peak.weather_gov_url and peak.weather_gov_url != "" %}
        <a class="apps-link" href="{{ peak.weather_gov_url }}" target="_blank" rel="noopener noreferrer">
          Weather.gov <i class="fa fa-arrow-right"></i>
        </a>
        {% endif %}

        {% if peak.fourteeners_url and peak.fourteeners_url != "" %}
        <a class="apps-link" href="{{ peak.fourteeners_url }}" target="_blank" rel="noopener noreferrer">
          14ers.com <i class="fa fa-arrow-right"></i>
        </a>
        {% endif %}
      </div>

      <div class="peaks-alltrails">
        <h3>AllTrails</h3>
        {% if peak.alltrails_urls and peak.alltrails_urls.size > 0 %}
          {% for trail_url in peak.alltrails_urls %}
          <a class="apps-link" href="{{ trail_url }}" target="_blank" rel="noopener noreferrer">
            Trail {{ forloop.index }} <i class="fa fa-arrow-right"></i>
          </a>
          {% endfor %}
        {% endif %}
      </div>
    </article>
    {% endfor %}

  </section>
</section>
