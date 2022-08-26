"use strict";
// 定义泛型的时候可以添加限制条件用 extends
Object.defineProperty(exports, "__esModule", { value: true });
function fn(a, b) {
    // 传入的T类型必须要有 length 这个属性
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
fn('cheng', 'shi'); // 这里传入的参数就必须要求要有 length 这个属性, 而且值必须为 number类型
// 指定类型参数
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// combine([1, 2, 3], ['cheng']) // 报错
combine([1, 2, 3], ['cheng']); // 正确使用
