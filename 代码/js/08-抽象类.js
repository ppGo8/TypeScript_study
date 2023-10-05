(function () {
    // 抽象父类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // 子类
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        // 子类重写父类的
        sayHello() {
            console.log('汪汪汪');
        }
    }
    // 实例化
    const dog = new Dog('旺仔', 6);
    dog.sayHello();
    // 不能使用抽象类创建实例,不然会报错
    // let an = new Animal('蛇')
})();
