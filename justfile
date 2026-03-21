deps:
	gem install jekyll bundle rouge jekyll-seo-tag
serve:
	jekyll serve
clean:
	jekyll clean
rebuild:
	jekyll clean && jekyll serve
