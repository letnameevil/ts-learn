"use strict";
class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setAge(a) {
        this.age = 22;
        console.log('(a+this.age)', a + this.age);
    }
}
const t = new Teacher('cheng', 22);
console.log('t.name', t.name);
t.setAge(33);
