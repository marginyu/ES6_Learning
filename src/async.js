/**
 * Created by marginyu on 17/4/11.
 */

var fetch = require('node-fetch');

async function gen(){
    console.log(">>>>>>>start");
    var url = 'http://rapapi.org/mockjsdata/10777/v1/accounts/invitations/unusage';
    var result = await fetch(url);
    let k = result.json();
    console.log(k);
    console.log(">>>>>>>end");
}

gen();