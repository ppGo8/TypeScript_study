// 之前创建类是有问题的
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // 定义方法,获取私有属性的值
        getAge() {
            return this.age; // 相当于间接访问,获取到了这个对象的值
        }
        // 定义方法,修改私有属性的值
        setAge(age) {
            // 逻辑判断 是否合法
            if (age >= 0) {
                this.age = age;
            }
        }
    }
    const per = new Person('ppgo', 24);
    console.log(per);
    /**
     * 上面的代码：属性是直接在对象中设置，属性可以任意的被修改
     */
    per.name = '笨蛋猪猪';
    // 私有属性不能使用 实例名.属性 获取
    // per.age
    // 私有属性通过方法间接访问,使用返回值
    console.log(per.getAge());
    // 修改私有属性的值 不能使用 实例名.属性= xxx 修改
    // 调用方法修改
    per.setAge(-10);
    console.log(per);
    per.setAge(77);
    console.log(per);
})();
