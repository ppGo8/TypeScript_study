// 下面函数的 参数类型和返回值类型相等 
// 如果不知道函数参数和返回值的类型具体是什么怎么办？ 但是知道这二者类型相当
// 二者都写成any?不行，这样就相当于没写类型
// 正确的解决方法：使用泛型
function fn(a) {
    return a;
}
/**
 * 在定义函数或类时，如果类型不明确就可以使用泛型
 * 泛型用大写字母
 * <>用来定义泛型,只有<>中定义了泛型后面才能使用
 * 泛型就是不确定的类型,只有在定义时才知道类型
 */
function fn2(a) {
    // 好处很明显:
    return a;
}
fn2(10); // 这里自动推断出类型是数字10
// 向上面那样类型自动推断可能并不太好,因此可以手动指定类型
// (但是要是正确的类型 因为10确实可以是10或者Number)
fn2(20);
// 泛型可以指定多个
function fn3(a, b) {
    console.log(b);
    return a;
}
// 还是建议在调用时手动指定泛型类型,防止编译器自动推断错误
fn3('hello', 66);
function fn4(a) {
    return a.length;
}
fn4('123');
fn4({ name: 'hello', length: 2 });
// 使用泛型 限制类中属性的类型
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('zhangsan');
