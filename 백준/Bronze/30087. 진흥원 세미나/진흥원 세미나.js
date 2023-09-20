const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
const semi = {
    Algorithm : 204,
    DataAnalysis : 207,
    ArtificialIntelligence : 302,
    CyberSecurity : "B101",
    Network : 303,
    Startup : 501,
    TestStrategy : 105
}

for(let i = 1; i <= n; i++){
    result.push(semi[input[i].trim()]);
}
console.log(result.join("\n"));