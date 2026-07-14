---
layout: post
title: "Adding a yearly favorites page to my bookshelf app"
date: 2026-07-14
---

I just added a [yearly favorites page](https://www.lucasnunno.com/apps/books/#/yearly-favorites) to my personal [Bookshelf app](https://www.lucasnunno.com/apps/books/#/). Previously I had a bunch of Google Keep notes that I've made over the years that looked like

![Google Keep search results showing yearly best-books checklists from 2021 through 2026](/assets/images/posts/yearly-favorites-google-keep-notes.png)

This works pretty well just for keeping track of the lists as I'm on the go and to look back on, but it'd be nice if it was more visual and was actually linked to my reading history, highlights, etc. I had the idea to make this a full featured page on my app since I already have my read data with the titles, covers, etc on my Bookshelf app.

In general with how good Codex has gotten lately, I've been more ambitious on leveling up my personal data from just normal lists/spreadsheets to full apps.

The JSON structure looks roughly like

```json
{
  "version": 1,
  "lists": [
    {
      "year": 2020,
      "title": "2020 Yearly favorites",
      "rankings": [
        {
          "rank": 1,
          "label": "Realm of the Elderlings",
          "kind": "series",
          "bookIds": [
            "ship-of-destiny-64f0c568",
            "fools-fate-17714653",
            "fools-quest-b2da0298"
          ]
        },
        {
          "rank": 2,
          "label": "Toll the Hounds",
          "kind": "book",
          "bookIds": ["toll-hounds-6fe734ca"]
        },
        {
          "rank": 3,
          "label": "Valor",
          "kind": "book",
          "bookIds": ["valor-854658ce"]
        },
        {
          "rank": 4,
          "label": "Best Served Cold",
          "kind": "book",
          "bookIds": ["best-served-cold-c8ec203c"]
        },
...
```

And it supports series by separating the label from the `bookIds`, which sometimes I want to just rank a whole series instead of an individual case like I did for Realm of the Elderlings here. The `bookIds` are foreign keys to another JSON file that has the details of the book itself.

![The Bookshelf app's 2020 yearly favorites, with Realm of the Elderlings ranked first across three books](/assets/images/posts/yearly-favorites-bookshelf-2020.png)

And 2026 for comparison

![The Bookshelf app's 2026 yearly favorites, showing ten ranked books with covers, ratings, and highlight counts](/assets/images/posts/yearly-favorites-bookshelf-2026.png)

I think it turned out pretty nicely, and I made a script to both update the JSON that generates the page as well as validate it against my read books in case of any missing matches. I also had Codex make a skill that will use the script it wrote to map any list that I paste in the future to update the JSON itself.
