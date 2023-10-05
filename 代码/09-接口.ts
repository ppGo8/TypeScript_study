(function (){
  // 描述一个对象类型
  type myType = {
    name: string,
    age: number,
  }

  const obj: myType = {
    name: 'ppgo',
    age: 24,
  }
  console.log(obj);
  
  /**
   * 接口用来定义一个类结构
   * 定义接口：interface关键字+接口名{}
   * 定义类：class关键字+类名{}
   * 作用:  1.接口用来定义一个类结构,说明类应该包含哪些属性和方法
   *       2.同时接口也可以当做类名声明去使用,效果类似type
   */
  interface myInterface{
    name: string,
    age: number,
  }
  // 使用接口作为类型
  const obj2: myInterface = {
    name: 'ppgo2',
    age: 23
  }

  // type别名类型和接口声明类型的区别
  // 1.type不能重复声明,interface可以重复声明:声明多个则取多个的并集,需要包含多个接口的全部属性
  // 2.接口可以在定义类的时候限制类的接口,这样很像侯祥磊

  interface myInter{
    // 接口中所有属性都不能有实际的值
    name: string,
    // 接口中所有方法都不能给出定义,不能写花括号
    sayHello(); 
  }

  // 实现接口属性和方法
  class myClass implements myInter{
    name: string 
    constructor(name: string){
      this.name = name
    }
    sayHello() {
        console.log('大家好');
    }
  }
})();