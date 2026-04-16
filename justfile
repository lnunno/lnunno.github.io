set windows-shell := [
	"powershell.exe",
	"-NoLogo",
	"-NoProfile",
	"-ExecutionPolicy",
	"Bypass",
	"-Command",
]

deps:
	gem install jekyll bundle rouge jekyll-seo-tag
serve:
	jekyll serve
serve-drafts:
	jekyll serve --drafts
clean:
	jekyll clean
rebuild:
	jekyll clean && jekyll serve
draft title:
	py scripts/new_draft.py "{{title}}"
draft-dry-run title:
	py scripts/new_draft.py "{{title}}" --dry-run
