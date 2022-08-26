"use strict";
// function paintShape(opts: Iopts) { // 第一种写法
//   console.log('opts',opts)
// }
// 第二种写法, 这中写法类似于解构, 所以不写以上的属性都是可行的(相当于是从Iopts实现这个接口的对象中结构出了其中的一些值)
function paintShape({ info, age = 22, name }) {
    // console.log('info', info)
    // console.log('age', age)
    // console.log('name', name)
}
// paintShape({ name: 'cheng', age: 22 })
// paintShape({ name: 'cheng' })
const info = {};
paintShape({ info, name: 'cheng' });
