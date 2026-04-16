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

To preview what it would create without writing the file, run:

```sh
just draft-dry-run "My New Post"
```

That creates:

```text
_drafts/my-new-post.md
```

If you want to publish a draft, move it into `_posts/` and rename it to use Jekyll's dated post format:

```text
_posts/YYYY-MM-DD-my-new-post.md
```
