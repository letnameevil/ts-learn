"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(obj) {
    console.log('x+y ', obj.x + obj.y);
}
fn({ x: 19, y: 'cheng' });
// 可选？
function bar(obj) {
    if (obj.y)
        return console.log('x+y ', obj.x + obj.y);
    console.log('x+y ', obj.x);
}
bar({ x: 199 });
bar({ x: 200, y: 'cheng' });
