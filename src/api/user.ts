import xhr from '@/request/xhr'

const login = (params = {}) => {
    return xhr({
        url: '/user/login',
        method: 'post',
        params: {
            ...params
        }
    })
}

export {
    login
}
