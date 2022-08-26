"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(id) {
    console.log('foo', id);
    return id;
}
console.log(foo(12));
console.log("foo('ox123')", foo('ox123'));
function bar(x) {
    console.log('x', x);
}
// let arr: number[] = [1, 2, 34, 4]
// let arr1: Array<string> = ['cheng', 'shi']
bar(['1', '2']);
// bar(23)
bar('cheng');
