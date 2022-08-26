"use strict";
// // 重载签名
// function makeDate(a: number): void
// function makeDate(timestamp: number): Date
// function makeDate(m: number, d: number, y: number): Date
Object.defineProperty(exports, "__esModule", { value: true });
function fn(x) {
    return x;
}
fn(true);
const bd = {
    filter: function (f) {
        let user1 = {
            admin: true,
        };
        let user2 = {
            admin: false,
        };
        return [user1, user2];
    },
};
const admins = bd.filter(function () {
    return this.admin;
});
console.log('admins', admins);
const args = [1, 2];
const angle = Math.atan2(...args);
const arr = [1, 2, 3];
arr.push(99);
const arr1 = [1, '1'];
arr1.push(33);
console.log('arr1', arr1);
