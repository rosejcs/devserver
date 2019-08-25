const express = require('express')
const cors = require('cors')
const proxy = require('http-proxy-middleware')
const http = require('http')
let app = express();

app.listen(3000,()=>{
	console.log('listen3000')
})


// app.use(
// 	'/api',
// 	proxy({target:'http://www.myjcsjcs.org',changeOrigin:true})
// )


app.use('/api', proxy({
	//目标后端服务地址
    // target: 'http://restapi.amap.com/v3/weather/weatherInfo?key=03553c38e5811b71ca8d533ed3f556e9&city=110101',
    target: 'http://restapi.amap.com/v3/weather',

    // pathRewrite: {
    //   '^/' : ''
    // },
    changeOrigin: true
}))


app.use(cors({
	origin:'http://127.0.0.1:8080',
	credentials:true
}))

app.get('/',(req,res)=>{
  let response = res;
  http.get('http://restapi.amap.com/v3/weather/weatherInfo?key=03553c38e5811b71ca8d533ed3f556e9&city=110101',(res)=>{
    res.on('data',(data)=>{
      console.log(data.toString());
      // res.end();
      let result = data.toString();
      response.send(result)
    })
  })
})