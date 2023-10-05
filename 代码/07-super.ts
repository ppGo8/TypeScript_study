(
  function(){
    // 父类
    class Animal{
      name: string;

      constructor(name: string) {
        this.name = name
      }

      sayHello(){
        console.log('动物在叫~');
      }
    }

    class Dog extends Animal{
      age: number;
      
      constructor(name: string,age: number){
        // 子类写了构造函数,就会覆盖父类的构造函数
        // 因此如果子类定义了构造函数,必须在子类的构造函数中调用父类的构造函数
        super(name) // 使用suepr调用父类的构造函数,如果不调用父类的构造函数则报错
        this.age = age
      }
      // 重写父类的sayHello 
      sayHello(): void {
          super.sayHello()
      }
    }

    const dog = new Dog('旺仔',6)
    dog.sayHello()
  }
)();