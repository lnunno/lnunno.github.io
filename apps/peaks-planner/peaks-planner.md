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
        {% if peak.weather_url and peak.weather_url != "" %}
        <a class="apps-link" href="{{ peak.weather_url }}" target="_blank" rel="noopener noreferrer">
          Weather <i class="fa fa-arrow-right"></i>
        </a>
        {% else %}
        <span class="peaks-placeholder">Weather link placeholder</span>
        {% endif %}

        {% if peak.fourteeners_url and peak.fourteeners_url != "" %}
        <a class="apps-link" href="{{ peak.fourteeners_url }}" target="_blank" rel="noopener noreferrer">
          14ers.com <i class="fa fa-arrow-right"></i>
        </a>
        {% else %}
        <span class="peaks-placeholder">14ers.com link placeholder</span>
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
        {% else %}
        <span class="peaks-placeholder">AllTrails link placeholder (one or many)</span>
        {% endif %}
      </div>
    </article>
    {% endfor %}

  </section>
</section>
