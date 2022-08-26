"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 接口 extends 的时候, 如果有重复的定义, 那么以子接口中的 定义标注为主要
let obj = {
    name: 'cheng',
    unit: 'wuhan',
};
let color = {
    colorName: 'cheng',
    radius: 22.43,
};
let d = {
    name: 'cheng',
    age: 22,
};
function fn(info) {
    console.log('info', info);
}
fn({ name: 'cheng', age: 222 });
