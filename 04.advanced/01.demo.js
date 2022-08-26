"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(a) {
    if (typeof a === 'string') {
        console.log('a.lenght', a.length);
    }
    console.log('执行完成');
    return a;
}
log('cheng');
log(123);
function identity(arg) {
    return arg;
}
let myIdentity = identity; // 用箭头函数的时候泛型类型要写的前面, 这里要区别一下断言
let myIdentity1 = identity; // 第二种定义函数的方法
