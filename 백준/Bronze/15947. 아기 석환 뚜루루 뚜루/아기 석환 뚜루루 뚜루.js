const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const list = 'baby sukhwan tururu turu very cute tururu turu in bed tururu turu baby sukhwan'.split(" ");
const len = list.length;
const idx = (N - 1) % len;
const k = Math.floor((N - 1) / len);
const s = list[idx];
let result = s;
if(s.endsWith("ru")){
    let re = k;
    if(s.endsWith("ruru")){
        re++;
    }
    re++;
    result = re >= 5 ? `tu+ru*${re}` : "tu" + "ru".repeat(re);
}
console.log(result);