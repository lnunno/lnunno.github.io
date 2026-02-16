---
layout: default
title: Peaks Planner
permalink: /apps/peaks-planner/
hide_in_header: true
---

<section class="peaks-app">
  <p>
    {% for link in site.data.peaks.top_links %}
    <a class="apps-link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>{% unless forloop.last %} | {% endunless %}
    {% endfor %}
  </p>

  {% for group in site.data.peaks.groups %}
  <section class="peaks-group">
    <h2 class="peaks-group-title">{{ group.name }}</h2>
    {% if group.links and group.links.size > 0 %}
    <p>
      {% for link in group.links %}
      <a class="apps-link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>{% unless forloop.last %} | {% endunless %}
      {% endfor %}
    </p>
    {% endif %}

    <section class="peaks-grid">
    {% for peak in group.peaks %}
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
  {% endfor %}
</section>
