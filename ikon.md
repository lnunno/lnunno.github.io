---
layout: default
title: Ikon Dashboard
permalink: /ikon/
---

# 🎿 Ikon Conditions

{% for resort in site.data.ikon.resorts %}

<details class="resort-block" markdown="1" id="{{ resort.slug }}">
  <summary class="resort-header">🚠 {{ resort.name }}</summary>

<div class="resort-content" markdown="1">
### 🌤 Conditions

- 📊 [Slopes]({{ resort.slopes_url }})
- 📷 [Snow Stake & Cams]({{ resort.snowstake_url }})
- 🌦 [Weather Channel]({{ resort.weather_channel_url }})
- ☁️ [MSN Weather]({{ resort.msn_weather_url }})
- 🎫 [Ikon Resort Page]({{ resort.ikon_web_url }})

### 🅿️ Parking
{% for lot in resort.parking %}
- 🚗 [{{ lot.name }}]({{ lot.maps_url }}){% endfor %}
</div>
</details>
{% endfor %}
