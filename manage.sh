#!/bin/zsh


watchify_start() {
    watchify ./www/js/main.js -o ./www/js/bundle.js -dv
}

if [[ -z "$1" ]]; then
   echo "usage:"
   echo "./manage.sh watchify_start"
fi

$*

