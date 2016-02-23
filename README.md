# Phaser Boilerplate

Phaser Boilerplate is a blank and solid place to get up and running quickly with a new phaser game project.

Phaser Boilerplate is built using [Babel](https://babeljs.io/), [Sass](http://sass-lang.com/), [Brunch](http://brunch.io/), [Electron](http://electron.atom.io/) and of course [Phaser.](http://phaser.io/)

## Getting Started

Phaser Boilerplate is simple and easy to get started with, but it does require a few things.

### Brunch
You will need Brunch to run a number of tasks that will build your game for you, automagically.

For help with Brunch installation and basic usage please [visit.](http://brunch.io/)

### Sass
Phaser Boilerplate also uses sass, a css pre-processor.

For more information and help with Sass please [visit.](http://sass-lang.com/)

### Electron

With Electron, creating a desktop application for your company or idea is easy. Initially developed for GitHub's Atom editor, Electron has since been used to create applications by companies like Microsoft, Facebook, Slack, and Docker.

For more information on using Electron please [vist.](http://electron.atom.io/)

### Babel
Babel is a JavaScript compiler.
Use next generation JavaScript, today.

For more information on using Babel please [vist.](https://babeljs.io/)

## Tasks

**brunch watch --server** - This default task will host and re-build your project when files are changed.
**brunch build --production** - This will build a static version of your project to host on the web outside of Electron.
**npm start** - This will launch your project in Electron
**npm build** - This will use Electron Packager to build a binary of your project

# Changelog

### Version 1.0
- Phaser Boilerplate is now built using states.
- Gulp file re-write
- Updated file structure
- Updated Phaser.js
- Removed Jquery

### Version 1.0.1
- Updated Phaser to v2.3.0 "Tarabon"
- Removed margin top from style sheet
- Made canvas height match browser height

### Version 1.0.2
- Re-wrote gulp file for performance
- Removed Gulp Compass
- Gulp file now uses node sass
- Added partials structure to sass files
- Phaser Boilerplate now uses Browser Sync, so that all your devices will reload when changes are saved.

### Version 1.0.3
- Replaced Gulp with Brunch
- Added Babel for ES6 JavaScript support
- Added Electron for making desktop versions of your game
