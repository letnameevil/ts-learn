"use strict";
/**
 * [index:number] : 这里索引签名的值的类型确定了以后, 该接口中的其他属性名和属性值都要符合这中定义
 * [props:string]: 这里不影响接口中其他属性名和属性值的定义
 */
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    1: 'cheng',
    2: 'shi',
};
let obj1 = {
    x: 1,
    y: 2,
    2: 33,
    // 4: 'cheng',  // 这里会报错, 因为属性签名的值必须是number
};
let not = {
    name: 'cheng',
    lenght: 22,
};
let arr = [1, 3, 4, 5];
