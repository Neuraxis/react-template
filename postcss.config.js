module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-preset-env'),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }),
    require('tailwindcss'),
  ],
}
