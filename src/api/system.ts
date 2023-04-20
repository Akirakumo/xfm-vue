import xhr from '@/request/xhr'

const getSystemInfo = (params = {}) => {
    return xhr({
        url: '/system/info',
        method: 'get',
        params: {
            ...params
        }
    })
}

const getSystemUsage = (params = {}) => {
    return xhr({
        url: '/system/usage',
        method: 'get',
        params: {
            ...params
        }
    })
}

export {
    getSystemInfo,
    getSystemUsage
}