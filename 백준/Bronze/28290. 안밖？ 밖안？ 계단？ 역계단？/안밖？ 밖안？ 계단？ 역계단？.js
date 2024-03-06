const S = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = "molu";
if(S === "fdsajkl;" || S === "jkl;fdsa"){
    result = "in-out";
} else if(S === "asdf;lkj" || S === ";lkjasdf"){
    result = "out-in";
} else if(S === "asdfjkl;"){
    result = "stairs";
} else if(S === ";lkjfdsa"){
    result = "reverse";
}
console.log(result);