const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://api.beehub.paradeum.com:8110'
        target: 'http://localhost:9011'
      },
    }
  }
})
