#!/bin/zsh
## Config
blog="/Users/brunoamaral/Labs/Digital-Insanity"
instagramdir="instagram"
file=$(basename $1)
dir=$(dirname $1)
imagefinal=${file//'json.xz'/'jpg'}
content=`xzcat "$1" | jq '.node.edge_media_to_caption.edges[0].node.text'`

declare -a tags;
tags=$(echo $content | grep -o '#[[:alpha:]|[:alnum:]]*')
jsontags=$(printf '%s' "${tags[@]}" | jq -R . | jq -s .)
jsontags=${jsontags//[$'\t\r\n'|$' ']}
jsontags=${jsontags//'#'/}
date=`cut -d'_' -f 1 <<< "$file"`
time=`cut -d'_' -f 2 <<< "$file"`

export post_image=$imagefinal;
export post_datetime=$(echo $date"T"${time//-/:}"+00:00")
export post_tags=$jsontags
if [[ $content = null ]]; then
  export post_slug
  export post_title=$date
  export post_content=" "
else
  slug=$(echo "$content" |  iconv -c -t ascii//TRANSLIT | sed -E 's/[~\^]+//g' | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+\|-+$//g' | sed -E 's/-$//g' | tr A-Z a-z )
  export post_slug=${slug:0:25}
  title=${content:0:50}
  export post_title=${title//'"'}
  export post_content=$content
fi

# echo "title: "$post_title
# echo "slug: "$slug
# echo "content: "$post_content
# echo "image: "$imagefinal
# echo "datetime: "$post_datetime
# echo "tags: "$post_tags

destination="$blog/content/$instagramdir/$date-$time$post_slug/"
if [[ ! -d "$destination"  ]]; then
  hugo new $instagramdir/$date-$time$post_slug/index.md
  cp ${1:r:r}(*.jpg|*.mp4) $destination
else
  echo 'post exists: '$post_title
  # exists=$(ls -alh  content/instagram/$date-$time$post_slug/ &> /dev/null | wc -l | sed -e 's/^[[:space:]]*//')
  # if [[ $exists -gt 0 ]]; then
  #   id=$(($exists + 1))
  #   hugo new instagram/$date-$time$post_slug-$id/index.md
  #   cp ${1:r:r}(*.jpg|*.mp4) content/instagram/$date-$time$post_slug-$id/
  # fi
fi
