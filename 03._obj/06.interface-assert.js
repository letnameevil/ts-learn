"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = {
    contents: 'cheng',
};
// console.log('x', x.contents.toString())  // 报错,因为接口中定义了contents为unknown类型, 所以无法确定x.contents 为字符串
console.log('x', x.contents.toString()); // 解决方法一: 断言
if (typeof x.contents === 'string')
    x.contents.toString(); // 解决方法二: 通过类型范围缩小的形式
function setContents(box) {
    console.log('box', box);
}
setContents({ value: 123 });
setContents({ value: 'cheng' });
setContents({ value: true });
let boxA = {
    value: 'cheng',
};
// 函数的泛型
function fn(a) {
    return [a];
}
fn(12);
