(
  function(){
    // 抽象父类
    abstract class Animal{
      name: string;

      constructor(name: string) {
        this.name = name
      }

      // 抽象方法,这里只定义结构,具体实现由子类决定
      abstract sayHello():void; // 不能写花括号
    }

    // 子类
    class Dog extends Animal{
      age: number;
      
      constructor(name: string,age: number){
        super(name) 
        this.age = age
      }
      // 子类重写父类的
      sayHello(): void {
          console.log('汪汪汪');
      }

    }
    // 实例化
    const dog = new Dog('旺仔',6)
    dog.sayHello()

    // 不能使用抽象类创建实例,不然会报错
    // let an = new Animal('蛇')

  }
)();