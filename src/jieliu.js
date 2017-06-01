/**
 * Created by marginyu on 17/5/22.
 */
//delay时间内发起多个请求,只执行第一个

const throttle = (fun, delay) => {
    let last = null;
    return (...cc) => {
        const now = + new Date();
        if (now - last > delay) {
            fun(...cc);
            last = now;
        }
    }
};


const myfunc = (txt,v)=>{
    console.log(txt);
    console.log("************",v);
};


//实例
const throttleExample  = throttle(myfunc, 1000);
//调用
throttleExample("xiao mei");
throttleExample("middle mei");
throttleExample("da mei");