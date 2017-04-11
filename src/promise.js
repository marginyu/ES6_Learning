/**
 * Created by marginyu on 17/4/11.
 */

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

let k = timeout(100);

k.then((value) => {
    console.log(value);
});

k.then((value) => {
    console.log(`>>>${value}<<<<`);
});