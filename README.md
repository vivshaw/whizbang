# whizbang
:zap: :boom: a quick minimal-config landing page starter for your sweet new Node + Express API

![Whizbang screencap](https://vivshaw.github.io/whizbang/images/whizbang-screencap.png)

This is a landing page template for Node + Express APIs. The design priority is to give the user
a responsive landing page with a quick rundown of what the API is and how it works, a link to
the project GitHub, and a form to try it out. The dev workflow priority is to make a
quick minimal-config solution so you can drop it in, forget it, and focus on actually writing
your sweet new Express API. It's as easy as "git clone", "npm install" & editing one pug template,
it has built-in automation with npm scripts, and it's even Heroku-ready. Built with Pug, Stylus,
Bootstrap 4, & npm for all-killer no-filler workflow magic.

Inspired by FreeCodeCamp's API development challenges.

## It's this easy:

1. Whizbang! Apply directly to the forehead!
```
git clone https://github.com/vivshaw/whizbang
cd whizbang/
npm install
npm run watch
```

2. Edit templates/index.pug to configure your vars and write your content.
baseurl is your API's base url, github is your API's github repository, and 
octocatColors are the background and foreground colors of the
[tholman-style GitHub corner](http://tholman.com/github-corners/).

3. Edit stylesheets/main.styl to configure the jumbotron gradient colors
with the vars bgLeft andbgRight

4. Write your API! All changes will refresh live with nodemon.
