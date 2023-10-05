(
  function(){
    // 定义一个animal类
    class Animal{
      name: string;
      age: number;

      constructor(name: string,age: number){
        this.name = name
        this.age = age
      }
      
      sayHello(){
        console.log(`${this.name}父类`);
        
      }
    }


    // 定义一个狗类 继承Animal
    class Dog extends Animal{
      run(){
        // 实例方法中直接使用this.xxx使用实例属性
        console.log(`${this.name}在跑`);      
      }
      // 方法重写: 子类覆盖父类的方法
      // 如果在子类中,添加了和父类相同的方法,那么子类的方法会覆盖父类的方法
      // 可以实现子类方法的变化
      sayHello() {
        console.log('汪汪汪');
      }
    }

    // 定义一个猫类 继承Animal
    class Cat extends Animal{}


    const dog = new Dog('旺财', 6)
    console.log(dog);
    dog.run()
    dog.sayHello()

    const cat = new Cat('咪咪', 7)
    console.log(cat);
    cat.sayHello()

  }
)();