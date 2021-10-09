import axios from 'axios';
import { PRE } from "./ApiConfig"
import qs from 'qs';
// 创建axios实例
const service = axios.create({
    // baseURL: 'http://localhost:8081', // api的base_url
});
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
const source = cancelToken.source();
let removePending = (config) => {
    for (let p in pending) {
        // console.log(pending[p].u, config.url + '&' + config.method + '&' + config.data)
        if (pending[p].u === config.url + '&' + config.method + '&' + JSON.stringify(config.data)) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

// request拦请求器
service.interceptors.request.use(config => {
    config.cancelToken = new cancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method + '&' + JSON.stringify(config.data), f: c });
    });

    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    if (config.url.includes("?")) {
        config.url = config.url + '&_timestamp=' + Date.now() + '&PRE' + PRE;
    } else {
        config.url = config.url + '?_timestamp=' + Date.now() + '&PRE' + PRE;
    }
    config.data = qs.stringify(config.data);
    return config;
}, error => {
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        // removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除

        if (response.status !== 200) {
            return Promise.reject(response);
        }
        if (res.code === null || res.code === undefined) {
            // 非标准格式数据
            // console.log(response);// for debug
            return response.data;
        }

        if (res.code !== 200) {
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014 || res.code === 5002) {
            } else if (res.code === 2000) {
            }else if( res.code === 2002 ){
            } else {
            }
            // return Promise.reject(response.data);
        } else {
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
export {
    source
};
