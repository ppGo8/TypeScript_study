class Dog {
    // constructor  被称为构造函数,会在对象创建时自动调用
    constructor(name, age) {
        // new Dog()可以理解为就是在执行这个函数
        // 在构造函数中,this就表示当前的实例
        // 可以通过this向新建对象中添加属性
        this.name = name;
        this.age = age;
    }
    // 在class中的this指向当前对象
    // 前提,在实例方法中的this
    bark() {
        console.log('汪汪汪');
        // this执行实例对象
        console.log(this);
    }
}
const dog = new Dog('zhangsan', 4);
const dog2 = new Dog('xiaobai', 2);
const dog3 = new Dog('wangcai', 66);
const dog4 = new Dog('可爱多', 88);
// dog.age = 22
console.log(dog);
dog.bark();
console.log(dog2);
console.log(dog3);
console.log(dog4);
