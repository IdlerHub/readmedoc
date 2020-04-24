import axios from 'axios';
// import Vue from 'vue';
import QS from 'qs';


// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

const baseURL = 'https://xxxx.com';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create({
    baseURL,
    timeout: 3000
});

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) { // 在发送请求之前做些什么
        console.log("拦截",config);
        //Object.assign(target,...sources)用于将所有可枚举属性的值从一个或多个源对象复制到目标对象,并且返回目标对象
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        // Object.assign(config.headers,{/** 需要在headers那边添加的默认传参数据 **/})
        // 或者:  config.headers.Authorization = 123;
        if(config.method === 'post'){
            //处理post请求的时候,动点手脚,这里是做了数据序列化
            config.data = QS.stringify(config.data);
        }
        return config;
    },
    function (error) {// 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        console.log("响应",response)
        if (response.status === 200){
            return response.data;
        }
        return response;
        // return Promise.reject(response);
    },
    function (error) {
        // 对响应错误做点什么
        console.log("响应错误",error)
        if (error && error.stack.indexOf("timeout") > -1) {
            //可以做一些toast提示,如下:
            // this.$toast("请求超时");
        }
        return Promise.reject(error);
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url,params){
    return new Promise((resolve,reject)=>{
        instance.get(url,params)
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err)
        })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url,params){
    return new Promise((resolve,reject)=>{
        //序列化
        instance.post(url,QS.stringify(params))
        .then(res=>{
            resolve(res.data);
        })
        .catch(err=>{
            reject(err)
        })
    })
}


//暴露到全局去,需要在vue中  import "./util/http";
// Plugin.install = function (Vue) {
//     Vue.axios = instance;
//     window.axios = instance;
//     Object.defineProperties(Vue.prototype, {
//         axios: {
//             get() {
//                 return instance;
//             }
//         },
//         $axios: {
//             get() {
//                 return instance;
//             }
//         }
//     });
// };

// Vue.use(Plugin);

// export default Plugin;