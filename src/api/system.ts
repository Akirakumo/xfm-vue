import xhr from '@/request/xhr'

export const getSystemInfo = (params = {}) => {
    return xhr({
        url: '/system/info',
        method: 'get',
        params: {
            ...params
        }
    })
}

export const getSystemUsage = (params = {}) => {
    return xhr({
        url: '/system/usage',
        method: 'get',
        params: {
            ...params
        }
    })
}