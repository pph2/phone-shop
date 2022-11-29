const path = require('path');

const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src")
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: /node_modules/,
          include: resolve('src'),
        },
        {
          test: /\.t(s|sx)$/,
          use: [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: resolve('cache-loader'),
              },
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true,
                compilerOptions: {
                  module: 'es2015',
                }
              }
            }
          ]
        
        }
      ]
    },
  }
})
