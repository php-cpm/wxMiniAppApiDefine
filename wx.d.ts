// Type definitions for wxMiniApp v20170112 using http://definitelytyped.org/
// Project: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html
// Definitions by: a php-nodejser <https://github.com/php-cpm/>
// Definitions: https://github.com/php-cpm/wxMiniAppApiDefine

declare function SUCCESS(callback: (res?: any) => void);

declare function FAIL(callback: (res?: any) => void);

declare function COMPLETE(callback: (res?: any) => void);

interface REQUEST_OBJECT {
url:String;//开发者服务器接口地址
data?:String;//请求的参数
header?:Object;//设置请求的 header , header 中不能设置 Referer
method?:String;//默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
dataType?:String;//默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse
success?:SUCCESS;//收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
fail?:FAIL;//接口调用失败的回调函数
complete?:COMPLETE;//接口调用结束的回调函数（调用成功、失败都会执行）
}
interface wx {
//https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
    request(object: REQUEST_OBJECT): void;
    chooseImage
    on(event: 'success', callback: () => void, id?: number): this;
    on(event: 'fail', callback: (soundId: number, error: any) => void, id?: number): this;
    on(event: 'complete', callback: (soundId: number) => void, id?: number): this;
}


declare module "wx" {
    export let wx: WX;
}
