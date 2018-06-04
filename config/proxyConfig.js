module.exports = {
  proxyList: {
    '/apis': {
      // 测试环境
      target: 'http://localhost:8090/bgp',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apis': '',   //需要rewrite重写的,
      },
      logLevel:'debug' 
    },
    // '/manager/ueditor/controller': {
    //   target: 'http://192.168.0.249:9082',  // 接口域名
    //   changeOrigin: true, //是否跨域  ,
    //   logLevel:'debug' 
    // },
    // '/video': {
    //   target: 'http://192.168.0.249:9082',  // 接口域名
    //   changeOrigin: true, //是否跨域  , 
    //   logLevel:'debug'  
    // },
    // '/manager': {
    //   target: 'http://192.168.0.249:9081',  // 接口域名
    //   changeOrigin: true, //是否跨域  , 
    //   logLevel:'debug'  
    // },
    // '/api/article/show/':{
    //   target: 'http://192.168.0.249:9082',  // 接口域名
    //   changeOrigin: true, //是否跨域  , 
    //   logLevel:'debug'  
    // },
    // '/manager/article/preview/':{
    //   target: 'http://192.168.0.249:9082',  // 接口域名
    //   changeOrigin: true, //是否跨域  , 
    //   logLevel:'debug'  
    // },
    // '/manager/article/':{
    //   target: 'http://192.168.0.249:9082',  // 接口域名
    //   changeOrigin: true, //是否跨域  , 
    //   logLevel:'debug'  
    // },
    //  '/manager/banner/':{
    //    target: 'http://192.168.0.249:9082',  // 接口域名
    //    changeOrigin: true, //是否跨域  , 
    //    logLevel:'debug'  
    //  },
    //  '/manager/dashboard/account':{
    //    target: 'http://192.168.0.249:9082',  // 接口域名
    //    changeOrigin: true, //是否跨域  , 
    //    logLevel:'debug'  
    //  }
}
}