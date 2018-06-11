module.exports = {
  proxyList: {
    '/api': {
      // 测试环境
      target: 'http://192.168.1.106:8080',  // 接口域名
      changeOrigin: true ,//是否跨域
      // pathRewrite: {
      //   '^/apis': '',   //需要rewrite重写的,
      // },
      logLevel:'debug' 
    }
}
}