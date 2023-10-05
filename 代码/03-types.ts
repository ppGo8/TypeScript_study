// object表示一个js对象
// js中万物皆对象,所以指定了object不只能赋值对象可以赋值很多
// 数组、对象、函数都可以
let f: object;
f = {};
f = []
f = function (){}

// 里面有东西的{}
// {}指定这个对象的属性和属性值
// 属性名+？代表可选属性
let ff: { name: string}
ff = { name: 'ppgo'}

// {}不写东西,就又变成了object的形式
let h3: {}

// 进阶：对象写任意属性和任意类型属性值均可
// 解决方法：[propName: string]:any 表示任意类型的属性
// 前面的[]代表任意字符串类型属性名(propName随便写 可替换)，:any代表属性值类型
let j3: {name:string , [propName: string]:any}
j3 = {name: '123',age: 24, height: 170}


// 函数
// 直接写Function没什么意思,只限制为函数,没有限制函数参数和返回值结构
let k3: Function
k3 = () => {}
// 希望限制参数和返回值类型
// 方法：使用类似箭头函数的写法,小括号里面是参数,箭头后面是返回值类型
// 语法 (形参: 类型,...,形参: 类型) => 返回值类型
let d3: (a: number,b: number) => number
// 函数参数的名字不重要,可以随便改
d3 = function(n1: number,n2 :number): number{
  return n1 + n2
}


// 数组array
// 数组类型表达有两种方式：
// 1.类型[] 2.Array<类型>
// 表示字符串数组,数组里元素都得是字符串
let e3: string[];
let f3: number[];
let ee3 : Array<number>; // 和上面的写法等价


// 元组：固定长度的数组
// 语法： [类型,...,类型],各个类型可以不一样
// 优点: 比数组的效率更好一点
let hh3 : [string, string]
hh3 = ['a', 'v']


// enum枚举类型
// 典型应用：性别,存储0 1 数字类型,然后有个值和他相对应
// 存储的是0,1这样可以节省内存空间
// 在后续存储和使用时,直接使用枚举的.语法获取里面的值赋值
enum Gender {
  Male = 0,
  Female = 1,
}
let i3: {name:string,gender: Gender}
i3 = {
  name: '孙悟空',
  gender: Gender.Male, // 使用枚举的值
}
// 使用枚举判断
i3.gender === Gender.Male


// &语法,用来连接两个类型规则
let o3: {name: string} & {age: number}
o3 = {
  // 两个都必须写,上面两个规则合并
  name: 'zhangsan',
  age: 22,
}

// 类型别名
// 夏敏k的类型如果要重复使用,每次都写很麻烦的
let k: 1 | 2 | 3 | 4 | 5;
// 使用type
type myType = 1 | 2 | 3 | 4 | 5;
let a3: myType
a3 = 1;


