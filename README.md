lnunno.github.io
================

Github pages for my account.

View this page at: http://lnunno.github.io

## Running the development version

I've included a [Makefile](Makefile) that should install the correct dependencies to build and run this site.

```
$ sudo apt-get install ruby-dev
$ sudo make deps
```

Also try running

```
$ make rebuild
```

To regenerate the site from scratch.

## Drafts

Jekyll supports unpublished posts in the `_drafts/` folder.

Create a draft as a Markdown file in `_drafts/` without a date in the filename, for example:

```text
_drafts/my-new-post.md
```

Use normal post front matter, for example:

```yaml
---
layout: post
title: My New Post
---
```

Drafts are excluded from normal builds. To preview them locally, run:

```sh
just serve-drafts
```

To create a draft from a title automatically, run:

```sh
just draft "My New Post"
```

To create a draft with an explicit date, run:

```sh
just draft "My New Post" 2026-04-20
```

You can also use a month name and day, which defaults to the current year. For example, `Mar 22` becomes `2026-03-22`:

```sh
just draft "My New Post" "Mar 22"
```

To create a published post instead, run:

```sh
just post "My New Post"
```

That creates:

```text
_posts/YYYY-MM-DD-my-new-post.md
```

To create a published post with an explicit date, run:

```sh
just post "My New Post" 2026-04-20
```

Full month names work too:

```sh
just post "My New Post" "March 22"
```

To preview what either command would create without writing the file, run:

```sh
just draft-dry-run "My New Post"
```

or:

```sh
just post-dry-run "My New Post" 2026-04-20
```

Drafts create:

```text
_drafts/my-new-post.md
```
