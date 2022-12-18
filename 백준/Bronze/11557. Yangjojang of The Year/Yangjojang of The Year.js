const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const n = parseInt(input[0]);
    const slist = input.slice(1).map(el => el.split(' '));
    let i = 0;
    let result = [];
    while(i < slist.length){
        const s = parseInt(slist[i]);
        let list = [];
        for(let j = i + 1; j <= s + i; j++){
            slist[j][1] = parseInt(slist[j][1]); 
            list.push(slist[j]);
        }
        result.push(list.sort((a, b) => b[1] - a[1])[0][0]);
        i += s + 1;
    }
    console.log(result.join('\n'));
  process.exit();
});