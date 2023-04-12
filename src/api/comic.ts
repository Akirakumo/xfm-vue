import xhr from '@/request/xhr'

export const getComicList = (params = {}) => {
    return xhr({
        url: '/comic/list',
        method: 'get',
        params: {
            ...params
        }
    })
}