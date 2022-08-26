"use strict";
// 断言
// const myCanvas = document.getElementById('cheng') as HTMLElement
Object.defineProperty(exports, "__esModule", { value: true });
// const myCanvas_1 = <HTMLElement>document.getElementById('evil')
const x = 'hello';
console.error('x', x);
// 确定值，只能写对应的值
let str = 'cheng';
// str = 'shji'  // 报错
function bar(s) {
    console.error('s', s);
}
bar(1);
function opt(x) {
    console.log('x', x);
}
opt('name');
// 重点
function handleReq(url, method) {
    console.log('method', method);
}
const req = {
    url: 'https://www.baidu.com',
    method: 'GET',
}; // as const  // 方式一 as const 直接给定类型，传入之前就已经判断了类型
// 对于handleReq来说第一个参数为string类型， req.url 可以确定为string类型， 但是第二个参数虽然也可以确定为string类型，但是并不能确定它为GET 或者 POST
// 所有有两种方式解决这个问题
handleReq(req.url, req.method); // 方式二
handleReq(req.url, req.method); // 方式三 等价于方式二 只是写法不同
