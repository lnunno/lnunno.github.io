serve:
	jekyll serve -I -H 0.0.0.0 -P 8080
clean:
	jekyll clean
rebuild:
	jekyll clean && jekyll serve -I -H 0.0.0.0 -P 8080
