#!/bin/bash

GREEN=$(tput -T screen setaf 2)

DEFAULT_DIR="/home/doc/Digital-Insanity/"
WEBSITE_DIR="/var/www/brunoamaral.eu"
WEBSITE="https://brunoamaral.eu"
HOST=$(hostname)

if [ "$HOST" == 'DeLorean' ] 
	then

	printf "\n${GREEN}### Building website and tagging the release ###\n${NORMAL}"
	cd $DEFAULT_DIR; 
	/usr/bin/git pull;

	printf "\n${GREEN}### Launch Hugo ###\n${NORMAL}"
	/usr/local/bin/hugo --minify --cleanDestinationDir;

	if [ "$1" == "--update-index" ]
		then
		printf "\n${GREEN}### Updating the search index ###\n${NORMAL}"
		${DEFAULT_DIR}plugins/algolia-hugo/algolia-hugo -f ${WEBSITE_DIR}/index.json -c ${DEFAULT_DIR}algolia-hugo.yaml  update
	fi

	/usr/bin/git -C $DEFAULT_DIR tag DEPLOY-$(date +%Y-%m-%d_%H-%M) && /usr/bin/git -C $DEFAULT_DIR push --tag

	printf "\n${GREEN}${BRIGHT}All done! $WEBSITE \n${NORMAL}"
else
	git pull && git push && ssh DeLorean "cd $DEFAULT_DIR && ./build.sh && git pull";
fi
