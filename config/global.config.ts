interface GlobalConfig {
    baseURL: string,
    timeout: number,
    whiteListApi: string[],
    secretId: string,
    pageSize: number[]
}

const globalConfig: GlobalConfig = {
    baseURL: 'http://127.0.0.1:8081/',
    timeout: 5 * 1000,
    whiteListApi: ["/a", "/b"],
    secretId: "helloworld",
    pageSize: [20, 40, 80]
}

export default globalConfig