---
layout: default
title: Audiobook Search
permalink: /apps/audiobook-search/
hide_in_header: true
---

<section class="audiobook-app">
  <form id="audiobook-form" class="audiobook-form">
    <label for="audiobook-query">Book name</label>
    <input id="audiobook-query" type="text" placeholder="e.g. The Name of the Wind" required>
    <div class="audiobook-actions">
      <button type="submit" class="audiobook-btn">Search</button>
      <button type="button" id="open-all-web" class="audiobook-btn ghost" disabled>Open all (web)</button>
      <button type="button" id="open-all-app" class="audiobook-btn ghost" disabled>Open all (Android apps)</button>
    </div>
  </form>

  <section id="audiobook-results" class="audiobook-results" hidden>
    <article class="audiobook-card">
      <h2>Libby</h2>
      <p>Library audiobook search</p>
      <div class="audiobook-card-actions">
        <a id="libby-web" class="apps-link" href="#" target="_blank" rel="noopener noreferrer">Open web <i class="fa fa-arrow-right"></i></a>
        <a id="libby-app" class="apps-link" href="#">Open app <i class="fa fa-arrow-right"></i></a>
      </div>
    </article>

    <article class="audiobook-card">
      <h2>Spotify</h2>
      <p>Spotify audiobook search</p>
      <div class="audiobook-card-actions">
        <a id="spotify-web" class="apps-link" href="#" target="_blank" rel="noopener noreferrer">Open web <i class="fa fa-arrow-right"></i></a>
        <a id="spotify-app" class="apps-link" href="#">Open app <i class="fa fa-arrow-right"></i></a>
      </div>
    </article>

    <article class="audiobook-card">
      <h2>Audible</h2>
      <p>Audible audiobook search</p>
      <div class="audiobook-card-actions">
        <a id="audible-web" class="apps-link" href="#" target="_blank" rel="noopener noreferrer">Open web <i class="fa fa-arrow-right"></i></a>
        <a id="audible-app" class="apps-link" href="#">Open app <i class="fa fa-arrow-right"></i></a>
      </div>
    </article>

  </section>

  <p class="audiobook-help">Android app links use intent URLs with browser fallback.</p>
</section>

<script>
  (function () {
    function slugify(value) {
      return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    function setLink(id, url) {
      document.getElementById(id).setAttribute("href", url);
    }

    function openAll(urls) {
      for (var i = 0; i < urls.length; i += 1) {
        window.open(urls[i], "_blank", "noopener,noreferrer");
      }
    }

    var form = document.getElementById("audiobook-form");
    var queryInput = document.getElementById("audiobook-query");
    var results = document.getElementById("audiobook-results");
    var openAllWeb = document.getElementById("open-all-web");
    var openAllApp = document.getElementById("open-all-app");

    var webUrls = [];
    var appUrls = [];

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var query = queryInput.value.trim();
      if (!query) {
        return;
      }

      var encoded = encodeURIComponent(query);
      var slug = slugify(query);

      var libbyWeb = "https://libbyapp.com/search/query-" + slug + "/page-1";
      var spotifyWeb = "https://open.spotify.com/search/" + encoded + "/audiobooks";
      var audibleWeb = "https://www.audible.com/search?keywords=" + encoded;

      var libbyApp = "intent://libbyapp.com/search/query-" + slug + "/page-1#Intent;scheme=https;package=com.overdrive.mobile.android.libby;S.browser_fallback_url=" + encodeURIComponent(libbyWeb) + ";end";
      var spotifyApp = "intent://search/" + encoded + "/audiobooks#Intent;scheme=spotify;package=com.spotify.music;S.browser_fallback_url=" + encodeURIComponent(spotifyWeb) + ";end";
      var audibleApp = "intent://www.audible.com/search?keywords=" + encoded + "#Intent;scheme=https;package=com.audible.application;S.browser_fallback_url=" + encodeURIComponent(audibleWeb) + ";end";

      setLink("libby-web", libbyWeb);
      setLink("spotify-web", spotifyWeb);
      setLink("audible-web", audibleWeb);

      setLink("libby-app", libbyApp);
      setLink("spotify-app", spotifyApp);
      setLink("audible-app", audibleApp);

      webUrls = [libbyWeb, spotifyWeb, audibleWeb];
      appUrls = [libbyApp, spotifyApp, audibleApp];

      openAllWeb.disabled = false;
      openAllApp.disabled = false;
      results.hidden = false;
    });

    openAllWeb.addEventListener("click", function () {
      if (webUrls.length) {
        openAll(webUrls);
      }
    });

    openAllApp.addEventListener("click", function () {
      if (appUrls.length) {
        openAll(appUrls);
      }
    });
  })();
</script>
