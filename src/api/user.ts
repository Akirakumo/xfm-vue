import xhr from '@/request/xhr'

export const login = (params = {}) => {
    return xhr({
        url: '/user/login',
        method: 'post',
        params: {
            ...params
        }
    })
}