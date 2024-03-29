## Usage

First, clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:gabrielecanepa/es6.git my-js-project
cd my-js-project
rm -rf .git
yarn install
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run:

```bash
eslint lib
webpack-dev-server
```

## How was this repo generated?

Environment setup:

```bash
yarn init
yarn add eslint
./node_modules/.bin/eslint --init
# How would you like to configure ESLint? Use a popular style guide
# Which style guide do you want to follow? Airbnb
# Do you use React? No
# What format do you want your config file to be in? JSON

# Open and edit rules in .eslintrc.json

yarn add webpack webpack-dev-server
touch webpack.config.js # open and configure
touch index.html
./node_modules/.bin/webpack-dev-server

git init
echo "node_modules" >> .gitignore
git add .
git commit -m "JavaScript empty project with ESLint"
```
