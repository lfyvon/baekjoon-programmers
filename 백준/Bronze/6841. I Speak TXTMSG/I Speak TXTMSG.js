const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const TXTMSG = {
    "CU": "see you",
    ":-)": "I’m happy",
    ":-()": "I’m unhappy",
    ";-)": "wink",
    ":-P": "stick out my tongue",
    "(~.~)": "sleepy",
    "TA": "totally awesome",
    "CCC": "Canadian Computing Competition",
    "CUZ": "because",
    "TY": "thank-you",
    "YW": "you’re welcome",
    "TTYL": "talk to you later"
}
const result = [];
let i = 0;
while(input[i]){
    result.push(TXTMSG[input[i]] ? TXTMSG[input[i++]] : input[i++]);
}
console.log(result.join("\n"));