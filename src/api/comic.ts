import xhr from '@/request/xhr'

const getComicList = (params = {}) => {
    return xhr({
        url: '/comic/list',
        method: 'get',
        params: {
            ...params
        }
    })
}

export {
    getComicList
}