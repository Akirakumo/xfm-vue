import xhr from '@/request/xhr'

const getDrives = (params = {}) => {
    return xhr({
        url: '/storage/drives',
        method: 'get',
        params: {
            ...params
        }
    })
}

export {
    getDrives,
}