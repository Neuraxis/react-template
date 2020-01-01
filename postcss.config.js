module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-preset-env'),
    // require('postcss-modules')({
    //   generateScopedName: '[path]__[name][local]__[hash:base64:5]',
    // }),
    require('tailwindcss'),
  ],
}
