import axios from 'axios'
import globalConfig from '../../config/global.config'
import { Base64 } from 'js-base64'

const { baseURL, timeout, whiteListApi, secretId } = globalConfig

interface BaseResponse {
    code: Number,
    msg: string,
    data: any
}

const xhr = axios.create({
    baseURL,
    timeout,
    responseType: 'json',
    headers: {
        'AppId': '123'
    }
})

// 请求拦截器
xhr.interceptors.request.use(config => {
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
xhr.interceptors.response.use(res => {
    const status = res.data.code || 200
    const message = res.data.msg || '未知错误'
    switch (status) {
        case 200:
            break
        case 401:
            return Promise.reject(new Error(message))
        default:
            return Promise.reject(new Error(message))
    }
    return res.data;
}, error => {
    return Promise.reject(new Error(error.message))
})

export default xhr
