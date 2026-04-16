---
layout: default
title: Peaks Planner
permalink: /apps/peaks-planner/
hide_in_header: true
stylesheets:
  - /css/peaks.css
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
>

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
    <div id="peaks-map-{{ forloop.index0 }}" class="peaks-map" aria-label="Map of {{ group.name }} peak locations"></div>

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

<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
></script>
<script>
  (function () {
    var groups = [
      {% for group in site.data.peaks.groups %}
      {
        mapId: {{ "peaks-map-" | append: forloop.index0 | jsonify }},
        groupName: {{ group.name | jsonify }},
        peaks: [
          {% for peak in group.peaks %}
          {
            name: {{ peak.name | jsonify }},
            weatherGovUrl: {{ peak.weather_gov_url | jsonify }},
            fourteenersUrl: {{ peak.fourteeners_url | jsonify }},
            allTrailsUrl: {% if peak.alltrails_urls and peak.alltrails_urls.size > 0 and peak.alltrails_urls[0].url %}{{ peak.alltrails_urls[0].url | jsonify }}{% else %}null{% endif %}
          }{% unless forloop.last %},{% endunless %}
          {% endfor %}
        ]
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];

    function coordsFromWeatherGov(url) {
      if (!url) {
        return null;
      }

      try {
        var parsed = new URL(url);
        var lat = Number(parsed.searchParams.get("lat"));
        var lon = Number(parsed.searchParams.get("lon"));
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
          return null;
        }
        return { lat: lat, lon: lon };
      } catch (error) {
        return null;
      }
    }

    groups.forEach(function (group) {
      var points = group.peaks
        .map(function (peak) {
          var coords = coordsFromWeatherGov(peak.weatherGovUrl);
          if (!coords) {
            return null;
          }
          return {
            name: peak.name,
            lat: coords.lat,
            lon: coords.lon,
            weatherGovUrl: peak.weatherGovUrl,
            fourteenersUrl: peak.fourteenersUrl,
            allTrailsUrl: peak.allTrailsUrl
          };
        })
        .filter(function (value) {
          return value !== null;
        });

      if (!points.length) {
        return;
      }

      var map = L.map(group.mapId, {
        scrollWheelZoom: true
      });

      L.tileLayer("https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 17,
        attribution: 'Map services and data available from U.S. Geological Survey, National Geospatial Program.'
      }).addTo(map);

      var bounds = L.latLngBounds([]);
      points.forEach(function (point) {
        var marker = L.circleMarker([point.lat, point.lon], {
          radius: 7,
          weight: 2
        }).addTo(map);

        var popupParts = [
          "<strong>" + point.name + "</strong>",
          "<div>" + group.groupName + "</div>"
        ];
        if (point.fourteenersUrl) {
          popupParts.push('<div><a href="' + point.fourteenersUrl + '" target="_blank" rel="noopener noreferrer">14ers.com</a></div>');
        }
        if (point.weatherGovUrl) {
          popupParts.push('<div><a href="' + point.weatherGovUrl + '" target="_blank" rel="noopener noreferrer">Weather.gov</a></div>');
        }
        if (point.allTrailsUrl) {
          popupParts.push('<div><a href="' + point.allTrailsUrl + '" target="_blank" rel="noopener noreferrer">AllTrails</a></div>');
        }
        marker.bindPopup(popupParts.join(""));

        bounds.extend([point.lat, point.lon]);
      });

      map.fitBounds(bounds, { padding: [24, 24] });
    });
  })();
</script>
