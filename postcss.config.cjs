const tailwindConfig = require('./src/css/tailwind.config')

module.exports = ({ env }) => ({ plugins: [ require('tailwindcss')(tailwindConfig), require('autoprefixer')() ] })
