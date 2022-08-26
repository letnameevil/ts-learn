"use strict";
// function fn(n?: number = 100) {
//   // 报错 // 可选参数和参数的默认值不能同时存在
//   console.log('n', n)
// }
Object.defineProperty(exports, "__esModule", { value: true });
function bar(n = 200) {
    // 这里就不能写可选参数了
    console.log('n', n);
}
