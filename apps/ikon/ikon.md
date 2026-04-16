---
layout: default
title: Ikon Dashboard
permalink: /apps/ikon/
hide_in_header: true
stylesheets:
  - /css/ikon.css
---

# 🎿 Ikon Conditions

{% for resort in site.data.ikon.resorts %}

<details class="resort-block" markdown="1" id="{{ resort.slug }}">
  <summary class="resort-header">🚠 {{ resort.name }}</summary>

<div class="resort-content" markdown="1">
### 🌤 Conditions
{% if resort.meteoblue_widget_url %}
<iframe
  title="Meteoblue forecast for {{ resort.name }}"
  src="{{ resort.meteoblue_widget_url }}"
  frameborder="0"
  scrolling="no"
  style="width:100%;max-width:100%;height:420px;border-radius:8px;border:1px solid #ddd;">
</iframe>
{% endif %}

- 📊 [Slopes]({{ resort.slopes_url }})
- 📷 [Snow Stake & Cams]({{ resort.snowstake_url }})
- 🌤 [Meteoblue Forecast (Next 7 Days)]({{ resort.meteoblue_url }})
- 🌦 [Weather Channel]({{ resort.weather_channel_url }})
- ☁️ [MSN Weather]({{ resort.msn_weather_url }})
- 🎫 [Ikon Resort Page]({{ resort.ikon_web_url }})

### 🅿️ Parking
{% for lot in resort.parking %}
- 🚗 [{{ lot.name }}]({{ lot.maps_url }}){% endfor %}
</div>
</details>
{% endfor %}
