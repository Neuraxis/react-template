const { resolve } = require('path')

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} basePathSrc            - Path from base to src
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({ tsconfigPath = '../../tsconfig.json', basePathSrc = '../../src/' } = {}) {
  const { paths } = require(tsconfigPath).compilerOptions

  const aliases = {}

  Object.keys(paths).forEach(item => {
    const key = item.replace('/*', '')
    const value = resolve(__dirname, basePathSrc + paths[item][0].replace('/*', '').replace('*', ''))

    aliases[key] = value
  })
  console.log('aliases', aliases)
  return aliases
}

module.exports = resolveTsconfigPathsToAlias
