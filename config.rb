# Disable layout for pages that don"t need it
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# External Pipeline
#
# Use Webpack to manage our JavaScript and Sass
activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "./node_modules/webpack/bin/webpack.js --bail" :
    "./node_modules/webpack/bin/webpack.js --watch -d",
  source: ".tmp/dist",
  latency: 1
