import request from "@/request/http"

export const login = (params = {}) => {
    return request({
        url: "/login",
        method: "get",
        params: {
            ...params
        }
    })
}
