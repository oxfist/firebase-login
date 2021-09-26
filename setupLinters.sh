#! /usr/bin/sh

yarn add eslint --dev
yarn run eslint --init # Don’t install packages
yarn add eslint --dev prettier eslint-plugin-prettier eslint-config-prettier
cp .gitignore .prettierignore
curl https://gist.github.com/oxfist/f28eca9d96e96cd10a92fd4ff80f7886 > .eslintrc.js
echo $'{\n  "singleQuote": true\n}' > .prettierrc.json
echo 'Now add `eslint src/ && prettier -c src/` to package.json scripts'
