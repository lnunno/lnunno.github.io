#!/usr/bin/env python3
"""Create a new Jekyll draft or post from a title."""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
from pathlib import Path

MONTHS = {
    "jan": 1,
    "january": 1,
    "feb": 2,
    "february": 2,
    "mar": 3,
    "march": 3,
    "apr": 4,
    "april": 4,
    "may": 5,
    "jun": 6,
    "june": 6,
    "jul": 7,
    "july": 7,
    "aug": 8,
    "august": 8,
    "sep": 9,
    "sept": 9,
    "september": 9,
    "oct": 10,
    "october": 10,
    "nov": 11,
    "november": 11,
    "dec": 12,
    "december": 12,
}


def slugify(title: str) -> str:
    slug = title.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = slug.strip("-")
    if not slug:
        raise ValueError("Title must contain at least one letter or number.")
    return slug


def parse_date(raw_date: str | None) -> dt.date:
    if raw_date is None:
        return dt.date.today()

    try:
        return dt.date.fromisoformat(raw_date)
    except ValueError:
        pass

    match = re.fullmatch(r"\s*([A-Za-z]+)\s+(\d{1,2})\s*", raw_date)
    if match is None:
        raise ValueError(
            "Date must use YYYY-MM-DD, 'Mar 22', or 'March 22' format."
        )

    month_name, day_text = match.groups()
    month = MONTHS.get(month_name.lower())
    if month is None:
        raise ValueError(
            "Date must use YYYY-MM-DD, 'Mar 22', or 'March 22' format."
        )

    day = int(day_text)
    year = dt.date.today().year

    try:
        return dt.date(year, month, day)
    except ValueError as exc:
        raise ValueError(
            f"Date '{raw_date}' is not valid in {year}."
        ) from exc


def build_front_matter(title: str, date: dt.date) -> str:
    escaped_title = title.replace('"', '\\"')
    return (
        "---\n"
        "layout: post\n"
        f'title: "{escaped_title}"\n'
        f"date: {date.isoformat()}\n"
        "---\n\n"
    )


def build_path(repo_root: Path, kind: str, slug: str, date: dt.date) -> Path:
    if kind == "draft":
        return repo_root / "_drafts" / f"{slug}.md"
    return repo_root / "_posts" / f"{date.isoformat()}-{slug}.md"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Create a new Markdown draft or post for this Jekyll site."
    )
    parser.add_argument("kind", choices=("draft", "post"), help="What to create")
    parser.add_argument("title", help="Title for the draft or post")
    parser.add_argument(
        "--date",
        help="Optional date in YYYY-MM-DD, 'Mar 22', or 'March 22' format. Defaults to today.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the file that would be created without writing it",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    repo_root = Path(__file__).resolve().parent.parent

    try:
        date = parse_date(args.date)
        slug = slugify(args.title)
    except ValueError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    output_path = build_path(repo_root, args.kind, slug, date)
    output_path.parent.mkdir(exist_ok=True)

    if output_path.exists():
        print(f"{args.kind.capitalize()} already exists: {output_path}", file=sys.stderr)
        return 1

    content = build_front_matter(args.title, date)

    if args.dry_run:
        print(output_path)
        print()
        print(content, end="")
        return 0

    output_path.write_text(content, encoding="utf-8", newline="\n")
    print(f"Created {args.kind}: {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
