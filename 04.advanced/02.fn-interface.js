"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 函数表达式直接指明函数的类型
function fn(a) {
    return a;
}
// 如果是函数赋值的话可以直接用接口
let myFn = function fn(a) {
    return a;
};
// 这里在实现这个接口的情况下,要给泛型指定值
let myFn1 = function fn(a) {
    return a;
};
// 如果是箭头函数的定义泛型一定要放在括号的前面
let myFn2 = (a) => {
    return a;
};
myFn1('cheng');
