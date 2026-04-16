---
layout: page
title: Music Charts
permalink: /apps/music/
hide_in_header: true
stylesheets:
  - /css/music.css
---

{% assign rows = 6 %}
{% assign cols = 6 %}
{% assign imageSize = 150 %}

<div class="music-page">
  <div class="chart-container">
    <a class="chart-lastfm-link" href="https://www.last.fm/user/GrokThis/library/albums?date_preset=LAST_7_DAYS">Lastfm 7 days</a>
    <img
      class="lastfm-chart"
      src="https://lastfmtopalbums.dinduks.com/patchwork.php?user=GrokThis&period=7day&rows={{ rows }}&cols={{ cols }}&imageSize={{ imageSize }}"
      alt="Top albums from the last 7 days"
    >
  </div>
  <div class="chart-container">
    <a class="chart-lastfm-link" href="https://www.last.fm/user/GrokThis/library/albums?date_preset=LAST_30_DAYS">Lastfm 1 month</a>
    <img
      class="lastfm-chart"
      src="https://lastfmtopalbums.dinduks.com/patchwork.php?user=GrokThis&period=1month&rows={{ rows }}&cols={{ cols }}&imageSize={{ imageSize }}"
      alt="Top albums from the last month"
    >
  </div>
  <div class="chart-container">
    <a class="chart-lastfm-link" href="https://www.last.fm/user/GrokThis/library/albums?date_preset=LAST_180_DAYS">Lastfm 6 months</a>
    <img
      class="lastfm-chart"
      src="https://lastfmtopalbums.dinduks.com/patchwork.php?user=GrokThis&period=6month&rows={{ rows }}&cols={{ cols }}&imageSize={{ imageSize }}"
      alt="Top albums from the last 6 months"
    >
  </div>
  <div class="chart-container">
    <a class="chart-lastfm-link" href="https://www.last.fm/user/GrokThis/library/albums?date_preset=LAST_365_DAYS">Lastfm 1 year</a>
    <img
      class="lastfm-chart"
      src="https://lastfmtopalbums.dinduks.com/patchwork.php?user=GrokThis&period=12month&rows={{ rows }}&cols={{ cols }}&imageSize={{ imageSize }}"
      alt="Top albums from the last year"
    >
  </div>
  <div class="chart-container">
    <a class="chart-lastfm-link" href="https://www.last.fm/user/GrokThis/library/albums?date_preset=ALL">Lastfm overall</a>
    <img
      class="lastfm-chart"
      src="https://lastfmtopalbums.dinduks.com/patchwork.php?user=GrokThis&period=overall&rows={{ rows }}&cols={{ cols }}&imageSize={{ imageSize }}"
      alt="Top albums overall"
    >
  </div>
</div>
