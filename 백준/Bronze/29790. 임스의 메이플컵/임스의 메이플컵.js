const [N, U, L] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
if(N >= 1000){
    if(U >= 8000 || L >= 260){
        console.log("Very Good");
    } else{
        console.log("Good");
    }
} else {
    console.log("Bad");
}