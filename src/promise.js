/**
 * Created by marginyu on 17/4/11.
 */

/*function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

let k = timeout(100);

k.then((value) => {
    console.log(value);
    return "xiaomei";
}).then((k)=>{
   console.log("kkk",k);
});

k.then((value) => {
    console.log(`>>>${value}<<<<`);
});*/



//1s后拿到数据
function myFetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("我拿到远程数据了");
        },1000);
    });
}


//设置超时时间
function timeoutFecth(f,ms){

    return new Promise((resolve,reject)=>{
        var t = setTimeout(()=>{
            reject("超时了,哥哥");
        },ms);

        f.then(function(rs){
           resolve(rs);
           setTimeout(t);
        });

    });
}

function _resolve(rs){
    console.log("success:"+rs);
}

function resolve2(rs){
    console.log("success:"+rs);
}

function reject2(rs){
    console.log("fail:"+rs);
}

function yoyo(){
    let _a = myFetch();
    //_a.then(_resolve);

    let a = timeoutFecth(_a,500);
    a.then(resolve2,reject2);

   // let b = timeoutFecth(_a,2000);
   // b.then(resolve2,reject2);
}

yoyo();
