// 使用class关键字来定义一个类
// 类主要包含两个部分: 属性 + 方法
// 直接定义的属性是实例属性,通过实例对象.xxx访问
// 在前面加static定义的属性是静态属性,通过类名.xxx访问
// readonly：让属性变成只读 不可修改

class Person{
  // 定义实例属性
  name: string = '孙悟空';
  readonly age: number = 18;   // 只读属性,不能修改
  
  // 定义类属性(静态属性),不需要创建类就可以使用的属性
  static type:string = 'monkey'
  
  
  // 定义方法
  // 实例方法
  sayHello(){
    console.log('hello 大家好');
  }
  // 类方法 使用static关键字
  static sing(){
    console.log('类方法 人人都会跳舞'); 
  }

}

const per = new Person()
// 访问实例对象
console.log(per);
// 访问实例属性
per.name = 'tom'
console.log(per.name);
// per.age = 22 // 修改制度属性

// 访问类属性
console.log(Person.type);


// 方法
// 实例方法
// 注意函数里面有了console.log 这里直接调用即可；
// 不要再嵌套console.log;再嵌套一层会多一个undefined
per.sayHello();
// 类方法
Person.sing();
