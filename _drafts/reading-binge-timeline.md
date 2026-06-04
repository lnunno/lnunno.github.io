---
layout: post
title: "Reading binge timeline"
date: 2026-06-04
categories: books
---

> **Note:** This is AI-generated analysis based on my Goodreads **Date Read** field. I found it pretty interesting, however.

I define a reading binge as **2+ books/volumes in a series within a tight window**, with the most meaningful binges being 3+ entries or a full arc.

This timeline uses month-scale sketches for the bigger binge arcs. Bar length shows the rough time span, and the label shows the amount read.

<style>
  .post {
    --month-border: #d7d7d7;
    --month-text: #666;
    --fantasy: #476a9f;
    --sf: #4f8a7b;
    --visual: #a35c5c;
    --comfort: #8a6f3d;
  }

  .binge-timeline {
    display: grid;
    gap: 1.6rem;
    margin: 1.5rem 0 2rem;
  }

  .binge-year {
    display: grid;
    gap: 0.4rem;
    min-width: 42rem;
  }

  .binge-year-wrap {
    overflow-x: auto;
    padding-bottom: 0.35rem;
  }

  .binge-year-title {
    font-weight: 700;
  }

  .binge-months,
  .binge-row {
    display: grid;
    grid-template-columns: repeat(12, minmax(3rem, 1fr));
    column-gap: 0.2rem;
    align-items: center;
  }

  .binge-months {
    color: var(--month-text);
    font-size: 0.75rem;
    border-bottom: 1px solid var(--month-border);
    padding-bottom: 0.2rem;
  }

  .binge-bar {
    grid-column: var(--start) / span var(--span);
    border-radius: 4px;
    color: #fff;
    cursor: help;
    font-size: 0.78rem;
    line-height: 1.2;
    padding: 0.5rem 0.6rem;
    min-height: 2.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .binge-bar.fantasy { background: var(--fantasy); }
  .binge-bar.sf { background: var(--sf); }
  .binge-bar.visual { background: var(--visual); }
  .binge-bar.comfort { background: var(--comfort); }

  .binge-overview-wrap {
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .binge-overview {
    display: grid;
    gap: 0.35rem;
    min-width: 170rem;
  }

  .binge-overview-years,
  .binge-overview-months,
  .binge-overview-row {
    display: grid;
    grid-template-columns: repeat(96, minmax(1.65rem, 1fr));
    column-gap: 0.1rem;
    align-items: center;
  }

  .binge-overview-years span {
    border-bottom: 1px solid var(--month-border);
    color: #444;
    font-weight: 700;
    padding-bottom: 0.2rem;
    text-align: center;
  }

  .binge-overview-months {
    color: var(--month-text);
    font-size: 0.68rem;
  }

  .binge-overview-bar {
    grid-column: var(--start) / span var(--span);
    border-radius: 4px;
    color: #fff;
    cursor: help;
    font-size: 0.82rem;
    line-height: 1.2;
    min-height: 2.25rem;
    overflow: hidden;
    padding: 0.55rem 0.7rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .binge-overview-bar.fantasy { background: var(--fantasy); }
  .binge-overview-bar.sf { background: var(--sf); }
  .binge-overview-bar.visual { background: var(--visual); }
  .binge-overview-bar.comfort { background: var(--comfort); }

  .binge-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    color: #555;
    font-size: 0.85rem;
    margin: 0.75rem 0 0.5rem;
  }

  .binge-key {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .binge-swatch {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 3px;
    display: inline-block;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".binge-bar, .binge-overview-bar").forEach(function (bar) {
      var label = bar.textContent.trim();
      var dates = bar.getAttribute("data-dates");
      var tooltip = dates ? label + " | " + dates : label;
      if (label) {
        bar.setAttribute("title", tooltip);
        bar.setAttribute("aria-label", tooltip);
      }
    });
  });
</script>

## Full timeline view

This scrollable overview shows the biggest arcs across the whole period. The per-year sections below keep the closer month-by-month context.

{% include binge-timeline-legend.html %}

<div class="binge-overview-wrap">
  <div class="binge-overview">
    <div class="binge-overview-years">
      <span style="grid-column: 1 / span 12;">2019</span>
      <span style="grid-column: 13 / span 12;">2020</span>
      <span style="grid-column: 25 / span 12;">2021</span>
      <span style="grid-column: 37 / span 12;">2022</span>
      <span style="grid-column: 49 / span 12;">2023</span>
      <span style="grid-column: 61 / span 12;">2024</span>
      <span style="grid-column: 73 / span 12;">2025</span>
      <span style="grid-column: 85 / span 12;">2026</span>
    </div>
    <div class="binge-overview-months">
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
      <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
    </div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jan 5 – Mar 24, 2019" style="--start:1; --span:3;">Expanse early run, 5 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Sep 22, 2019 – Mar 22, 2020" style="--start:9; --span:7;">Malazan Book of the Fallen, 10 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="May 20, 2020 – Jan 3, 2021" style="--start:17; --span:9;">Realm of the Elderlings, 15-ish books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Dec 6, 2020 – Jan 18, 2021" style="--start:24; --span:2;">Faithful and the Fallen, 4 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="May 17, 2021 – Jul 7, 2024" style="--start:29; --span:39;">Berserk bursts, 40+ volumes</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Jun 29 – Oct 15, 2021" style="--start:30; --span:5;">Second Apocalypse, 7 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar comfort" data-dates="Jul 5, 2021 – Jan 29, 2022" style="--start:31; --span:7;">Horus Heresy early run, 9 entries</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Dec 28, 2021 – Aug 21, 2022" style="--start:36; --span:9;">Sun Eater #1-5 + side stories</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Apr 22 – Jul 17, 2022" style="--start:40; --span:4;">Dandelion Dynasty, 4 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="Jun 30 – Jul 10, 2022" style="--start:42; --span:2;">Saga, 10 volumes</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar comfort" data-dates="Jul 16, 2022 – Jan 18, 2023" style="--start:43; --span:7;">Matthew Corbett, 7 entries</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="Jan 29 – Jul 2, 2023" style="--start:49; --span:7;">Vagabond, 13 volumes</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="Jul 7 – Aug 26, 2023" style="--start:55; --span:2;">Monster, 9 volumes</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="Nov 27, 2023 – Jan 27, 2024" style="--start:59; --span:3;">Real, 15 volumes</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Nov 18 – Nov 24, 2023" style="--start:59; --span:1;">Sun Eater side stories</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jan 30, 2024" style="--start:61; --span:1;">Disquiet Gods</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar visual" data-dates="Feb 14 – May 21, 2024" style="--start:62; --span:4;">Vinland Saga, 11 omnibuses</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jul 13 – Nov 17, 2024" style="--start:67; --span:5;">Xeelee, 5 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jan 25 – Apr 4, 2025" style="--start:73; --span:4;">Foundation, 3 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jul 15 – Dec 28, 2025" style="--start:79; --span:6;">Destiny's Children, 3 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Mar 26 – Jul 22, 2025" style="--start:75; --span:5;">Forgotten Warrior, 5 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Aug 15 – Dec 9, 2025" style="--start:80; --span:5;">The Passage, 3 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="Sep 26, 2025 – Jan 16, 2026" style="--start:81; --span:5;">Shadowmarch, 4 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jul 20 – Oct 19, 2025" style="--start:79; --span:4;">Sun Eater finale stretch</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar sf" data-dates="Jan 5 – Feb 18, 2026" style="--start:85; --span:2;">Silo, 3 books</div></div>
    <div class="binge-overview-row"><div class="binge-overview-bar fantasy" data-dates="May 1 – May 27, 2026" style="--start:89; --span:1;">Malazan Empire continuation</div></div>
  </div>
</div>

## 2019: Expanse into Malazan

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 5 – Mar 24, 2019" style="--start:1; --span:3;">Expanse, 5 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Sep 22 – Dec 31, 2019" style="--start:9; --span:4;">Malazan #1-6, 6 books</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster               | What happened                                                                                                |
| ------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Jan 5 – Mar 24, 2019**        | **The Expanse**                | You read/logged _Caliban’s War_ through _Nemesis Games_, 5 entries in about 11 weeks.                        |
| **Sep 22 – Dec 31, 2019**       | **Malazan Book of the Fallen #1–6** | The first huge binge began here: _Gardens of the Moon_ through _The Bonehunters_, 6 big books in just over 3 months. |

**Pattern:** Your tracked reading starts with exactly the kind of thing you still like: large systems, factions, long arcs, and cumulative payoff.

## 2020: Malazan into the Robin Hobb year

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Jan 23 – Mar 22, 2020" style="--start:1; --span:3;">Malazan #7-10, 4 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Apr 9 – May 5, 2020" style="--start:4; --span:2;">First Law, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="May 20, 2020 – Jan 3, 2021" style="--start:5; --span:8;">Realm of the Elderlings, 14+ books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Dec 6, 2020 – Jan 18, 2021" style="--start:12; --span:1;">Faithful and the Fallen, 4 books</div></div>
    </div>
  </div>
</div>

| Dates                          | Series / cluster            | What happened                                                                                   |
| ------------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Jan 23 – Mar 22, 2020**      | **Malazan Book of the Fallen #7–10** | The Malazan binge continued with _Reaper's Gale_ through _The Crippled God_, completing all 10 main books in about 6 months overall. |
| **Apr 9 – May 5, 2020**        | **First Law trilogy**       | _The Blade Itself_ → _Last Argument of Kings_ in under a month.                                 |
| **Apr 14 – May 26, 2020**      | **Dresden Files #1–5**      | You moved quickly through the early Dresden books, but your ratings were not especially strong. |
| **May 20 – Jun 13, 2020**      | **Farseer Trilogy**         | _Assassin’s Apprentice_ → _Assassin’s Quest_ in under a month.                                  |
| **Jun 27 – Aug 27, 2020**      | **Liveship Traders**        | Full trilogy in two months, and this was one of your highest-satisfaction binges.               |
| **Sep 5 – Sep 28, 2020**       | **Tawny Man**               | Full trilogy in 23 days. Very strong signal.                                                    |
| **Oct 8 – Oct 30, 2020**       | **Rain Wild Chronicles**    | Four books in 22 days. Less loved than the other Hobb arcs.                                     |
| **Nov 8, 2020 – Jan 3, 2021**  | **Fitz and the Fool**       | Full trilogy in about 8 weeks.                                                                  |
| **Dec 6, 2020 – Jan 18, 2021** | **Faithful and the Fallen** | Four books in about 6 weeks, with very high ratings.                                            |

**Pattern:** 2020 begins by completing your first huge epic fantasy project, then turns into your first big **emotional long-haul fantasy binge** year. Hobb especially seems to have taught your data that “long series with emotional payoff” is a core mode for you.

## 2021: the explosion year

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Feb 26 – Apr 26, 2021" style="--start:2; --span:3;">Memory, Sorrow, and Thorn, 3+ books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="May 17 – Oct 16, 2021" style="--start:5; --span:6;">Berserk, 23 volumes</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Jun 29 – Oct 15, 2021" style="--start:6; --span:5;">Second Apocalypse, 7 books</div></div>
      <div class="binge-row"><div class="binge-bar comfort" data-dates="Jul 5, 2021 – Jan 29, 2022" style="--start:7; --span:6;">Horus Heresy, 9 entries</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Aug 24 – Sep 17, 2021" style="--start:8; --span:2;">Age of Madness, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Nov 8 – Dec 14, 2021" style="--start:11; --span:2;">Green Bone Saga, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Dec 28 – Dec 29, 2021" style="--start:12; --span:1;">Sun Eater kickoff, 2 entries</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster                           | What happened                                                                                 |
| ------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **Jan 2 – Jan 15, 2021**        | **Hyperion Cantos #1–2**                   | Two major SF books in two weeks.                                                              |
| **Feb 26 – Apr 26, 2021**       | **Memory, Sorrow, and Thorn**              | Tad Williams trilogy plus bridge/related reading across about two months. Strong ratings.     |
| **Apr 3 – Apr 11, 2021**        | **Cradle #1–3**                            | Very fast, but not a strong long-term match.                                                  |
| **Apr 10 – Apr 11, 2021**       | **Invincible Vol. 1–3**                    | A quick comics sample/binge.                                                                  |
| **Apr 14 – Apr 18, 2021**       | **Attack on Titan Vol. 23–34-ish cluster** | Around 10 volumes in 5 days. Big manga-binge signal.                                          |
| **May 2 – May 8, 2021**         | **Children of Time #1–2**                  | Two Tchaikovsky SF books in a week, both strong.                                              |
| **May 17 – Oct 16, 2021**       | **Berserk Vol. 1–23**                      | A long visual binge over five months. This is one of your clearest manga commitments.         |
| **May 22 – Jun 21, 2021**       | **Necroscope #1–3**                        | Three horror books in one month.                                                              |
| **Jun 29 – Oct 15, 2021**       | **The Second Apocalypse**                  | Bakker's full _Prince of Nothing_ trilogy plus the four _Aspect-Emperor_ books, 7 books in about 15 weeks, with multiple favorite-level ratings. |
| **Jul 5, 2021 – Jan 29, 2022**  | **Horus Heresy early run**                 | 9 entries over about 7 months. More of a recurring side-binge than one sprint.                |
| **Aug 1 – Aug 20, 2021**        | **One-Punch Man Vol. 1–4**                 | Quick manga/comics burst.                                                                     |
| **Aug 24 – Sep 17, 2021**       | **Age of Madness**                         | Full trilogy in under a month. Stronger for you than original First Law.                      |
| **Sep 4 – Nov 29, 2021**        | **Vorkosigan Saga cluster**                | 5 entries across ~3 months.                                                                   |
| **Sep 13, 2021 – Jan 30, 2022** | **Gotrek & Felix #1–5**                    | A Warhammer/adventure audio-friendly style binge.                                             |
| **Sep 27 – Nov 27, 2021**       | **Saxon Stories**                          | 5 books in two months. Historical adventure mode.                                             |
| **Nov 8 – Dec 14, 2021**        | **Green Bone Saga**                        | Full trilogy in about 5 weeks. Strong payoff signal.                                          |
| **Dec 1, 2021 – Mar 23, 2022**  | **The Expanse late arc**                   | You returned to finish the late Expanse run from _Strange Dogs_ through _Memory’s Legion_.    |
| **Dec 28 – Dec 29, 2021**       | **Sun Eater kickoff**                      | _Empire of Silence_ and _The Lesser Devil_ back-to-back, starting the Ruocchio run right at the end of the year. |

**Pattern:** 2021 is where your modern reading personality fully appears: manga, grim fantasy, Warhammer/adventure, historical warfare, idea-SF, and full-series payoff binges all happening at once. The Bakker run is bigger than a trilogy sample; it is one of the year's major full-commitment projects.

## 2022: peak volume and peak payoff

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar comfort" data-dates="Jan 3 – Mar 5, 2022" style="--start:1; --span:3;">Cirque du Freak, 12 books</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 12 – Aug 21, 2022" style="--start:1; --span:8;">Sun Eater #2-5 + side story, 5 entries</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Apr 22 – Jul 17, 2022" style="--start:4; --span:4;">Dandelion Dynasty, 4 books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Jun 30 – Jul 10, 2022" style="--start:6; --span:2;">Saga, 10 volumes</div></div>
      <div class="binge-row"><div class="binge-bar comfort" data-dates="Jul 16, 2022 – Jan 18, 2023" style="--start:7; --span:6;">Matthew Corbett, 7 entries</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Aug 24 – Oct 7, 2022" style="--start:8; --span:3;">Three-Body, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Sep 2 – Dec 26, 2022" style="--start:9; --span:4;">Gap Cycle, 5 books</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster                | What happened                                                                                                                        |
| ------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Jan 3 – Mar 5, 2022**         | **Cirque du Freak**             | All 12 books in about two months. Many appear unrated, so this may have been nostalgia/fast-consumption rather than “rating signal.” |
| **Jan 12 – Aug 21, 2022**       | **Sun Eater main-series catch-up** | _Howling Dark_, _Demon in White_, _Kingdoms of Death_, _Queen Amid Ashes_, and _Ashes of Man_: 5 Ruocchio entries across the year, with the main books all very strong. |
| **Feb 4 – Feb 13, 2022**        | **Ash and Sand trilogy**        | Full trilogy in 9 days. Very strong binge.                                                                                           |
| **Mar 8 – Apr 10, 2022**        | **Otherland #1–3**              | Three books in about a month.                                                                                                        |
| **Mar 21 – Apr 30, 2022**       | **Harry Bosch early cluster**   | Bosch #1–3 in about 6 weeks. This starts a long-term procedural comfort lane.                                                        |
| **Apr 10 – May 21, 2022**       | **Kingsbridge #1–2**            | _Pillars of the Earth_ and _World Without End_. Very strong ratings.                                                                 |
| **Apr 17 – Apr 24, 2022**       | **Berserk Vol. 24–29**          | Six volumes in a week.                                                                                                               |
| **Apr 22 – Jul 17, 2022**       | **Dandelion Dynasty**           | All four books in under three months. Perfect/near-perfect payoff signal.                                                            |
| **Jun 12 – Sep 22, 2022**       | **Dark Tower late run**         | Four entries across the summer into September. Strong ratings.                                                                       |
| **Jun 30 – Jul 10, 2022**       | **Saga Vol. 1–10**              | Ten volumes in 11 days. Huge comics binge, very high ratings.                                                                        |
| **Jul 16, 2022 – Jan 18, 2023** | **Matthew Corbett**             | Seven entries over six months. Strong historical/horror-adventure comfort binge.                                                     |
| **Aug 24 – Oct 7, 2022**        | **Remembrance of Earth’s Past** | Full trilogy in 6 weeks. Very strong “ambition/payoff” signal.                                                                       |
| **Sep 2 – Dec 26, 2022**        | **The Gap Cycle**               | Five books across almost four months. Big, dark SF binge.                                                                            |
| **Nov 2 – Nov 11, 2022**        | **Commonwealth Saga**           | _Pandora’s Star_ and _Judas Unchained_ in 9 days. Very strong Hamilton signal.                                                       |
| **Dec 9 – Dec 17, 2022**        | **Beartown trilogy**            | Full trilogy in 8 days. Huge emotional/humanist binge.                                                                               |

**Pattern:** 2022 is probably your cleanest “ambition with payoff” year. You finished several complete arcs: **Dandelion Dynasty, Three-Body, Beartown, Commonwealth, Saga, Ash and Sand**, plus major movement in _Sun Eater_ and _Matthew Corbett_.

This is the year I’d use as your ideal template: big ambition + comics + emotional fiction + horror/adventure + historical sprawl.

## 2023: visual storytelling and modern SF/fantasy surges

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 15 – Feb 10, 2023" style="--start:1; --span:2;">Void trilogy, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Jan 29 – Jul 2, 2023" style="--start:1; --span:7;">Vagabond, 13 volumes</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Mar 5 – May 14, 2023" style="--start:3; --span:3;">Shadows of the Apt, 4 books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Jul 7 – Aug 26, 2023" style="--start:7; --span:2;">Monster, 9 volumes</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Jul 10 – Oct 9, 2023" style="--start:7; --span:4;">Parasyte, 8 volumes</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Oct 31, 2023 – Jan 17, 2024" style="--start:10; --span:3;">Earthsea, 4 books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Nov 27, 2023 – Jan 27, 2024" style="--start:11; --span:2;">Real, 15 volumes</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Nov 18 – Nov 24, 2023" style="--start:11; --span:1;">Sun Eater side stories, 2 entries</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster            | What happened                                                              |
| ------------------------------- | --------------------------- | -------------------------------------------------------------------------- |
| **Jan 15 – Feb 10, 2023**       | **Void trilogy**            | Peter F. Hamilton’s Void trilogy in under a month.                         |
| **Jan 29 – Jul 2, 2023**        | **Vagabond Vol. 1–12-ish**  | 13 volumes over five months. Very strong art/theme signal.                 |
| **Mar 5 – May 14, 2023**        | **Shadows of the Apt #1–4** | Four books in about 10 weeks, strong ratings.                              |
| **Mar 13 – Aug 18, 2023**       | **Century Trilogy**         | Three Follett books across five months.                                    |
| **Mar 20 – Apr 23, 2023**       | **Xenogenesis**             | Full Butler trilogy in about a month.                                      |
| **Mar 30 – May 28, 2023**       | **Red Rising sequel arc**   | _Iron Gold_, _Dark Age_, _Light Bringer_ in about two months.              |
| **Jun 14 – Jun 16, 2023**       | **Berserk Vol. 30–35**      | Six volumes in three days.                                                 |
| **Jun 16 – Jun 23, 2023**       | **Goodnight Punpun**        | Four omnibus volumes in a week.                                            |
| **Jul 7 – Aug 26, 2023**        | **Monster**                 | Nine Perfect Edition volumes in about 7 weeks. Very strong Urasawa signal. |
| **Jul 10 – Oct 9, 2023**        | **Parasyte**                | Eight volumes over three months.                                           |
| **Oct 31, 2023 – Jan 17, 2024** | **Earthsea #1–4**           | Four books across about 11 weeks.                                          |
| **Nov 18 – Nov 24, 2023**       | **Sun Eater side-story prep** | _The Dregs of Empire_ and _Tales of the Sun Eater, Volume 3_ in one week, setting up the return to the main series. |
| **Nov 27, 2023 – Jan 27, 2024** | **Real Vol. 1–15**          | Fifteen volumes in two months. Major Inoue signal.                         |
| **Nov 30 – Dec 25, 2023**       | **Empire of the Wolf**      | Three books in under a month. Strong ratings.                              |

**Pattern:** 2023 is the year of **manga/art-forward binging**. You did _Vagabond_, _Berserk_, _Goodnight Punpun_, _Monster_, _Parasyte_, and _Real_ in overlapping waves. This supports your correction that your manga taste is heavily about **art, depth, emotional clarity, and visual flow**.

## 2024: continuation, consolidation, and selected binges

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Feb 14 – May 21, 2024" style="--start:2; --span:4;">Vinland Saga, 11 omnibuses</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 30, 2024" style="--start:1; --span:1;">Disquiet Gods</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Mar 12 – Apr 2, 2024" style="--start:3; --span:2;">Bound and Broken, 4 entries</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Jun 29 – Jul 7, 2024" style="--start:6; --span:2;">Berserk, 6 volumes</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jul 13 – Nov 17, 2024" style="--start:7; --span:5;">Xeelee, 5 books</div></div>
      <div class="binge-row"><div class="binge-bar visual" data-dates="Nov 19, 2024 – Jan 4, 2025" style="--start:11; --span:2;">Pluto, 8 volumes</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster                     | What happened                                                                                                            |
| ------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **Jan 30, 2024**                | **Sun Eater #6**                     | _Disquiet Gods_ landed as a major Ruocchio continuation and favorite-level main-series entry.                            |
| **Feb 14 – May 21, 2024**       | **Vinland Saga Omnibus Vol. 1–11**   | Eleven omnibuses in about three months. Strong fit with your art/theme/historical mode.                                  |
| **Mar 12 – Apr 2, 2024**        | **The Bound and the Broken cluster** | Four entries in about three weeks.                                                                                       |
| **Jun 29 – Jul 7, 2024**        | **Berserk Vol. 36–41**               | Six volumes in about a week.                                                                                             |
| **Jul 13 – Nov 17, 2024**       | **Xeelee Sequence #1–4 + Vacuum Diagrams** | _Raft_, _Timelike Infinity_, _Flux_, _Ring_, and _Vacuum Diagrams_: five Baxter books across about four months.          |
| **Oct 11, 2024 – Jan 17, 2025** | **Innocent Omnibus Vol. 1–3**        | Three omnibuses over about three months. Art-first, but your ratings were more mixed.                                    |
| **Nov 19, 2024 – Jan 4, 2025**  | **Pluto Vol. 1–8**                   | Full Urasawa/Tezuka series in about 7 weeks. Strong ratings.                                                             |
| **Dec 17, 2024 – Feb 16, 2025** | **Wheel of Time #1–4-ish**           | You moved through early Wheel of Time across two months, though not strictly in publication order in the export display. |

**Pattern:** 2024 is less explosive than 2021–2023, but still has distinct binging: _Vinland Saga_, _Berserk_, Baxter's Xeelee books, and _Pluto_. The difference is that there are fewer simultaneous major new discoveries.

## 2025: slower pace, longer arcs, comfort-series mode

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 25 – Apr 4, 2025" style="--start:1; --span:4;">Foundation, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Mar 26 – Jul 22, 2025" style="--start:3; --span:5;">Forgotten Warrior, 5 books</div></div>
      <div class="binge-row"><div class="binge-bar comfort" data-dates="Apr 24 – May 16, 2025" style="--start:4; --span:2;">Bosch #7-9, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jul 15 – Dec 28, 2025" style="--start:7; --span:6;">Destiny's Children, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Aug 15 – Dec 9, 2025" style="--start:8; --span:5;">The Passage, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Sep 26, 2025 – Jan 16, 2026" style="--start:9; --span:4;">Shadowmarch, 4 books</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jul 20 – Oct 19, 2025" style="--start:7; --span:4;">Sun Eater finale stretch, 2 entries</div></div>
      <div class="binge-row"><div class="binge-bar comfort" data-dates="Nov 18, 2025 – Feb 23, 2026" style="--start:11; --span:2;">Bosch #10-13, 4 books</div></div>
    </div>
  </div>
</div>

| Dates                           | Series / cluster                       | What happened                                                                                        |
| ------------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Jan 25 – Apr 4, 2025**        | **Foundation trilogy**                 | Three Asimov books across about 10 weeks. Moderate rating signal.                                    |
| **Mar 26 – Jul 22, 2025**       | **Saga of the Forgotten Warrior #2–6** | Five entries over four months. Strong ratings.                                                       |
| **Apr 24 – May 16, 2025**       | **Harry Bosch #7–9**                   | Three Bosch books in three weeks.                                                                    |
| **Jul 15 – Dec 28, 2025**       | **Destiny’s Children**                 | _Coalescent_, _Exultant_, and _Transcendent_: Baxter's Xeelee-linked trilogy across the second half of the year. |
| **Jul 20 – Oct 19, 2025**       | **Sun Eater finale stretch**           | _Tales of the Sun Eater, Vol. 4_ in July, then _Shadows Upon Time_ in October, closing the main Ruocchio sequence. |
| **Jul 26 – Jul 28, 2025**       | **The Climber Vol. 1–2**               | Two volumes in three days. This is small but potentially important given your art/theme preference.  |
| **Aug 15 – Dec 9, 2025**        | **The Passage trilogy**                | Full trilogy over four months, very strong ratings.                                                  |
| **Sep 26, 2025 – Jan 16, 2026** | **Shadowmarch**                        | Full quartet across about four months, extremely strong ratings.                                     |
| **Nov 18, 2025 – Feb 23, 2026** | **Harry Bosch #10–13**                 | Another Bosch run across three months.                                                               |

**Pattern:** 2025 is less discovery-binge and more **project completion / comfort continuation**. You’re working through series, but with longer gaps.

The two most important signals are **The Passage** and **Shadowmarch**: both suggest you still strongly respond to long arcs when the payoff lands.

## 2026 so far: shorter complete arcs and selective continuation

{% include binge-timeline-legend.html %}

<div class="binge-timeline">
  <div class="binge-year-wrap">
    <div class="binge-year">
      <div class="binge-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Jan 5 – Feb 18, 2026" style="--start:1; --span:2;">Silo, 3 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Jan 14 – Feb 2, 2026" style="--start:1; --span:2;">Riftwar, 2 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="Feb 25 – Mar 3, 2026" style="--start:3; --span:1;">Dunk and Egg, 2 novellas</div></div>
      <div class="binge-row"><div class="binge-bar sf" data-dates="Mar 22 – Apr 4, 2026" style="--start:3; --span:2;">Archimedes Engine, 2 books</div></div>
      <div class="binge-row"><div class="binge-bar fantasy" data-dates="May 1 – May 27, 2026" style="--start:5; --span:1;">Malazan Empire, 2 books</div></div>
    </div>
  </div>
</div>

| Dates                    | Series / cluster                              | What happened                                         |
| ------------------------ | --------------------------------------------- | ----------------------------------------------------- |
| **Jan 5 – Feb 18, 2026** | **Silo trilogy**                              | _Wool_, _Shift_, _Dust_ in about 6 weeks.             |
| **Jan 14 – Feb 2, 2026** | **Riftwar Saga #1–2**                         | Two books in under three weeks. Moderate signal.      |
| **Feb 25 – Mar 3, 2026** | **Dunk and Egg #1–2**                         | Two novellas in a week.                               |
| **Mar 22 – Apr 4, 2026** | **Archimedes Engine #1–2**                    | Two books in about two weeks, both very highly rated. |
| **May 1 – May 27, 2026** | **Novels of the Malazan Empire continuation** | _Blood and Bone_ and _Assail_ in the same month.      |
| **Jun 3, 2026**          | **Revelation Space continuation**             | _Inhibitor Phase_ logged most recently.               |

**Pattern:** 2026 is not high-volume so far, but the **Archimedes Engine** pair looks like exactly the kind of current excitement that should influence your near-term priorities: factional SF, payoff, big worldbuilding.

## The biggest binge arcs overall

These are the most important by volume/intensity:

| Rank | Series                                     | Dates                                           | Scale                        |
| ---: | ------------------------------------------ | ----------------------------------------------- | ---------------------------- |
|    1 | **Malazan Book of the Fallen**             | Sep 22, 2019 – Mar 22, 2020                     | 10 books / 6 months          |
|    2 | **Robin Hobb Realm of the Elderlings run** | May 20, 2020 – Jan 3, 2021                      | 15-ish books / 8 months      |
|    3 | **Berserk**                                | May 17, 2021 – Jul 7, 2024                      | Multiple bursts, 40+ volumes |
|    4 | **Dandelion Dynasty**                      | Apr 22 – Jul 17, 2022                           | 4 big books / 3 months       |
|    5 | **Saga**                                   | Jun 30 – Jul 10, 2022                           | 10 volumes / 11 days         |
|    6 | **Sun Eater / Ruocchio**                   | Dec 28, 2021 – Aug 21, 2022; Nov 2023; Jan 2024; Jul–Oct 2025 | #1–5 plus side entries, then _Disquiet Gods_ and _Shadows Upon Time_ |
|    7 | **The Second Apocalypse**                  | Jun 29 – Oct 15, 2021                           | 7 books / 15 weeks           |
|    8 | **Real**                                   | Nov 27, 2023 – Jan 27, 2024                     | 15 volumes / 2 months        |
|    9 | **Vagabond**                               | Jan 29 – Jul 2, 2023                            | 13 volumes / 5 months        |
|   10 | **Monster**                                | Jul 7 – Aug 26, 2023                            | 9 volumes / 7 weeks          |
|   11 | **Vinland Saga**                           | Feb 14 – May 21, 2024                           | 11 omnibuses / 3 months      |
|   12 | **Stephen Baxter / Xeelee-related run**    | Jul 13, 2024 – Dec 28, 2025                     | 8 books across two waves     |
|   13 | **Matthew Corbett**                        | Jul 16, 2022 – Jan 18, 2023                     | 7 books / 6 months           |
|   14 | **Shadowmarch**                            | Sep 26, 2025 – Jan 16, 2026                     | 4 books / 4 months           |

## What the timeline says about you

The clearest pattern is that you do not simply “read series.” You enter **project mode**.

There are three kinds of project mode in your data:

### 1. Full-commitment epic project

Examples: **Malazan, Hobb, Bakker, Baxter, Dandelion Dynasty, Sun Eater, Shadowmarch, The Passage**.

These are slower but intense. You seem to like when the series has a full architecture and you can feel the long game.

### 2. Visual immersion binge

Examples: **Berserk, Saga, Vagabond, Real, Monster, Pluto, Vinland Saga**.

These are often faster and more clustered. Your best visual binges are not just “fun comics”; they have art, emotional weight, and themes.

### 3. Momentum / comfort continuation

Examples: **Harry Bosch, Gotrek & Felix, Saxon Stories, Matthew Corbett, Horus Heresy**.

These fill in between heavier reads. They seem to keep your rhythm alive without demanding that every book be a masterpiece.

## Most useful takeaway

Your best reading stretches usually happen when you have **one big project plus one fast visual or comfort lane** running nearby.

For example:

- 2021: Bakker / Expanse / Saxon Stories plus _Berserk_
- 2022: Dandelion / Sun Eater / Three-Body plus _Saga_
- 2023: Hamilton / Tchaikovsky / Earthsea plus _Vagabond_, _Monster_, _Real_
- 2024: Reynolds / Baxter's Xeelee books plus _Vinland Saga_, _Pluto_
- 2025: _The Passage_ / _Shadowmarch_ plus Baxter and Bosch

So the best near-term structure is probably not “pick one series and only read that.” It is:

**one ambitious payoff series + one visually rich manga/comic + one momentum/comfort series.**

That setup matches your historical best periods much better than a single linear queue.
