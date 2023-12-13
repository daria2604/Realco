const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/dist',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/abstracts/_functions.scss";
          @import "@/assets/scss/abstracts/_variables.scss";
          @import "@/assets/scss/abstracts/_mixins.scss";
        `,
      },
    },
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons/svg',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
          extract: true,
          spriteFilename: 'img/icons.[hash:8].svg'
      },
      pluginOptions: {
          plainSprite: true
      }    
    },  
  },
    
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
});
