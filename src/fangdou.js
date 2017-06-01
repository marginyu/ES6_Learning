/**
 * Created by marginyu on 17/5/22.
 */

//delay时间内发起多个请求,只执行最后一个

const debouce = (fun, delay) => {
    let timer = null;
    return (...cc) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...cc);
        }, delay);
    }
};


const myfunc = (txt,v)=>{
  console.log(txt);
    console.log(">>>>",v);
};

//实例
const debouceExample = debouce(myfunc, 1000);
//调用
debouceExample("a");
debouceExample("b");
debouceExample("c");