module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}