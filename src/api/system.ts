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