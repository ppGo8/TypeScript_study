(function () {
    const obj = {
        name: 'ppgo',
        age: 24,
    };
    console.log(obj);
    // 使用接口作为类型
    const obj2 = {
        name: 'ppgo2',
        age: 23
    };
    // 实现接口属性和方法
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
})();
