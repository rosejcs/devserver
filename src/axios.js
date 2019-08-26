import Vue from 'vue'
import axios from 'axios'
// import 

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://127.0.0.1:3000"

Vue.prototype.axios = axios;
// 高德天气api
// http://restapi.amap.com/v3/weather/weatherInfo?key=03553c38e5811b71ca8d533ed3f556e9&city=110101