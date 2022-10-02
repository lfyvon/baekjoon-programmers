const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [hour, minute] = input[0].split(' ').map(el => parseInt(el));
const time = parseInt(input[1]);
let result = [];

minute += time;
if (minute >= 60) {
    hour += parseInt(minute / 60);
    if(hour >= 24){
        hour -= 24;
    }
    minute = minute % 60;
}

result = [hour, minute];

console.log(result.join(' '));