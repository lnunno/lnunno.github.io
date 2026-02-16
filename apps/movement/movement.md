---
layout: default
title: Movement Climbing Dashboard
permalink: /apps/movement/
hide_in_header: true
---

# Movement Climbing Gyms

<section class="movement-links">
  {% for gym in site.data.movement.gyms %}
  <a class="movement-card" href="{{ gym.maps_url }}">
    <h2>{{ gym.name }}</h2>
    <span class="apps-link">
      Open <i class="fa fa-arrow-right"></i>
    </span>
  </a>
  {% endfor %}
</section>
