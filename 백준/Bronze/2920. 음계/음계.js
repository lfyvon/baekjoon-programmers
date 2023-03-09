let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let asc = "1 2 3 4 5 6 7 8";
let des = "8 7 6 5 4 3 2 1";

if(input === asc){
    console.log("ascending");
} else if(input === des){
    console.log("descending");
} else{
    console.log("mixed");
}
