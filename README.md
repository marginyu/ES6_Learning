# ES6_Learning
ES6学习

http://nya.io/Node-js/promise-in-nodejs-get-rid-of-callback-hell/ 使用promise摆脱回调金字塔

https://cnodejs.org/topic/56c297d671204e03637a3936  promise 与 generator的区别

https://segmentfault.com/a/1190000006510526 JavaScript异步编程的终极演变

https://cnodejs.org/topic/58385d4927d001d606ac197d Promise 的链式调用与中止

promise 的 then 方法里面可以继续返回一个新的 promise 对象
下一个 then 方法的参数是上一个 promise 对象的 resolve 参数
catch 方法的参数是其之前某个 promise 对象的 rejecte 参数
一旦某个 then 方法里面的 promise 状态改变为了 rejected，则promise 方法连会跳过后面的 then 直接执行 catch
catch 方法里面依旧可以返回一个新的 promise 对象

ES 6: Promise , Generator

ES 7: Async

```javascript

new Promise(
    /* executor */
    function(resolve, reject) {...}
);

```

参数

executor

executor是一个带有resolve和reject两个参数的函数 。executor 函数由Promise的实现立即执行，传递resolve和reject函数（在Promise构造函数之前调用执行器甚至返回创建的对象）。resolve 和 reject 函数，当被调用时，分别解决或拒绝 promise。executor 通常会启动一些异步工作，然后，一旦完成，可以调用resolve函数来解决promise，否则在发生错误时拒绝它。
如果在executor函数中抛出一个错误，那么该promise 将被拒绝。executor的返回值被忽略。



Promise.reject(reason)
调用Promise的rejected句柄，并返回这个Promise对象。
Promise.resolve(value)
用成功值value完成一个Promise对象。如果该value为可继续的（thenable，即带有then方法），返回的Promise对象会“跟随”这个value，采用这个value的最终状态；否则的话返回值会用这个value满足（fullfil）返回的Promise对象。


http://stackoverflow.com/questions/32823277/async-await-not-working-in-combination-with-fetch

对远程调用设置超时,不用promise如何实现?

原始的xmlhttprequest如何实现? https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/timeout


promise 链式调用

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch 使用fetch

fetch 与 xmlhttprequest的区别  https://github.com/camsong/blog/issues/2

父子promise