exports.config =
# See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'

  plugins:
# Compile SASS
    sass:
      mode: 'native'
# Compile ES2015 Syntax
    babel:
      presets: ['es2015']
      ignore: [
        /^(bower_components|vendor)/
        'app/legacyES5Code/**/*'
      ]
      pattern: /\.(es6|jsx)$/
#    Further process your CSS
    postcss:
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]

  modules: {
    wrapper: false
  }