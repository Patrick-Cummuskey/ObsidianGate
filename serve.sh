#!/bin/sh

if [ -z "${1}" ]; then
	bundle exec jekyll serve

else
	bundle exec jekyll ${*}

fi
