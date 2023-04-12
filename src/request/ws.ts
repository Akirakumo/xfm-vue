export default class WsConnect {

    constructor(url: string) {
        this.url = url
    }

    private url = ''

    private ws = new WebSocket(this.url)

    // ws.onopen = (mevt) => {
    //     console.log('客户端已连接')
    // }
    // ws.onmessage = (mevt) => {
    //     console.log('客户端收到消息: ' + mevt.data)
    //     ws.close()
    // }
    // ws.onclose = () => {
    //     console.log('连接关闭')
    // }
    // ws.onerror = (err) => {
    //     console.log('ws error', err)
    // }
}