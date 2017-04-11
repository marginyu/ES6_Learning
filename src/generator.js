/**
 * Created by marginyu on 17/4/11.
 */


var fetch = require('node-fetch');

function* gen(){
    console.log(">>>>>>>start");
    var url = 'http://rapapi.org/mockjsdata/10777/v1/accounts/invitations/unusage';
    var result = yield fetch(url);
    console.log(result);
    console.log(">>>>>>>end");
}
console.log("------1");
var g = gen();
var result = g.next();
console.log("------2");
result.value.then(function(data){
    console.log("------3");
    return data.json();
}).then(function(data){
    console.log("------4");
    g.next(data);
});