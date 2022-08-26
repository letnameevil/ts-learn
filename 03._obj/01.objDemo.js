"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(person) {
    console.log('person.name', person.name);
}
function bo(person) {
    console.log('person.name', person.name);
}
bo({ name: 'cheng', age: 2 });
function boo(person) {
    console.log('person.name', person.name);
}
boo({ name: 'evil', age: 22 });
