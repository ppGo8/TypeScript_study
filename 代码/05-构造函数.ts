class Dog{
  // 如果写成下面这样【给值】,那么每个实例对象的name和age都一样
  // name: string = '旺财'
  // age: number = 3

  // 如果只写成下面这样【不给值】,那么在new一个对象时,对象中没有这两个属性
  // name: string; 
  // age: number;
  
  // 写成下面这样 类中定义 + constructor赋值
  // 如果不写下面这个在constructor会提示name和age在类中没有定义
  name: string;
  age: number;

  // constructor  被称为构造函数,会在对象创建时自动调用
  constructor(name: string, age: number){
    // new Dog()可以理解为就是在执行这个函数
    // 在构造函数中,this就表示当前的实例
    // 可以通过this向新建对象中添加属性
    this.name = name;
    this.age = age;
  }

  // 在class中的this指向当前对象
  // 前提,在实例方法中的this
  bark(){
    console.log('汪汪汪');
    // this执行实例对象
    console.log(this);
    
  }
}


const dog = new Dog('zhangsan', 4)
const dog2 = new Dog('xiaobai', 2)
const dog3 = new Dog('wangcai', 66)
const dog4 = new Dog('可爱多', 88)
// dog.age = 22
console.log(dog);
dog.bark()
console.log(dog2);
console.log(dog3);
console.log(dog4);
