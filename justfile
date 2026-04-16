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
draft title date='':
	@if ("{{date}}" -ne "") { py scripts/new_post.py draft "{{title}}" --date "{{date}}" } else { py scripts/new_post.py draft "{{title}}" }
draft-dry-run title date='':
	@if ("{{date}}" -ne "") { py scripts/new_post.py draft "{{title}}" --date "{{date}}" --dry-run } else { py scripts/new_post.py draft "{{title}}" --dry-run }
post title date='':
	@if ("{{date}}" -ne "") { py scripts/new_post.py post "{{title}}" --date "{{date}}" } else { py scripts/new_post.py post "{{title}}" }
post-dry-run title date='':
	@if ("{{date}}" -ne "") { py scripts/new_post.py post "{{title}}" --date "{{date}}" --dry-run } else { py scripts/new_post.py post "{{title}}" --dry-run }
