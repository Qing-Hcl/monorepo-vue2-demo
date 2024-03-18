const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = (dirname = __dirname) => {

  function resolve(dir) {
    return path.join(dirname, dir)
  }

  const { name } = require(resolve('package.json'))

  return defineConfig({
    transpileDependencies: true,
    outputDir: path.join(__dirname, '../../dist', name),
    configureWebpack: config => {
      return {
        resolve: {
          alias: {
            '@': resolve('src'),
            '@@': path.join(__dirname, '../../src'),
          }
        },
      }
    },
  })
}