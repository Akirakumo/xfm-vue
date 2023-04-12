import axios from 'axios'
import globalConfig from '../../config/global.config'
import { Base64 } from 'js-base64'
import router from '@/router'

const { baseURL, timeout, whiteListApi, secretId } = globalConfig

const request = axios.create({
    baseURL,
    timeout,
    responseType: "json",
    headers: {
        "AppId": "123"
    }
})

// 请求拦截器
request.interceptors.request.use(config => {
    // 鉴权
    const url = config.url || ''
    const token = localStorage.getItem('token')
    if (whiteListApi.indexOf(url) === -1 && token) {
        config.headers.token = token;
    }
    // 加密secretId
    const _secret = Base64.encode(secretId + new Date().toString());
    config.headers.Secret = _secret;
    return config;
}, error => {
    return Promise.reject(new Error(error))
})

// 响应拦截器
request.interceptors.response.use(res => {
    const status = res.data.code || 200
    const message = res.data.msg || "未知错误"
    switch (status) {
        case 200:
            break
        case 401:
            router.push("/login")
            return Promise.reject(new Error(message))
        default:
            return Promise.reject(new Error(message))
    }
    return res;
}, error => {
    return Promise.reject(new Error(error))
})

export default request
