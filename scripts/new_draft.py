#!/usr/bin/env python3
"""Create a new Jekyll draft from a title."""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
from pathlib import Path


def slugify(title: str) -> str:
    slug = title.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = slug.strip("-")
    if not slug:
        raise ValueError("Title must contain at least one letter or number.")
    return slug


def build_front_matter(title: str) -> str:
    escaped_title = title.replace('"', '\\"')
    today = dt.date.today().isoformat()
    return (
        "---\n"
        "layout: post\n"
        f'title: "{escaped_title}"\n'
        f"date: {today}\n"
        "---\n\n"
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Create a new Markdown draft in the Jekyll _drafts folder."
    )
    parser.add_argument("title", help="Draft title")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the file that would be created without writing it",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    drafts_dir = repo_root / "_drafts"
    drafts_dir.mkdir(exist_ok=True)

    slug = slugify(args.title)
    draft_path = drafts_dir / f"{slug}.md"

    if draft_path.exists():
        print(f"Draft already exists: {draft_path}", file=sys.stderr)
        return 1

    content = build_front_matter(args.title)

    if args.dry_run:
        print(draft_path)
        print()
        print(content, end="")
        return 0

    draft_path.write_text(content, encoding="utf-8", newline="\n")
    print(f"Created draft: {draft_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
