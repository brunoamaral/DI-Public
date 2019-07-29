for file in * 
do 
	date=`cut -d' ' -f 1 <<< "$file"`
 	dir=${file%".jpg"} 
 	mkdir "$dir"
 	mv "$file" "$dir"
 	time=`cut -d' ' -f 2 <<< "$file" | sed -e 's/\./\:/g'`
 	datetime=$date'T'$time'+00:00'
 	printf '%s\n' '---'  'categories: '  "date: $datetime"  'description: '  'draft: false' 'resources:'  "  - src: '$file'" '    name: "header"' 'layout: instagram'  'slug:'  'stories:'  'subtitle:'  'title: Untitled' 'options:' '  unlisted: false' '  showHeader: true'  '---' '' "<img src=\"$file\" />" | tee "$dir/index.md";
 	find . -name index.md -execdir ln -s {} index.pt.md \; 
done