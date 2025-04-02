const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const result = [];

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N * 3)}${" ".repeat(N)}${"@".repeat(N)}`);
}

for(let i = 0; i < N * 3; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N)}${"@".repeat(N)}${" ".repeat(N)}${"@".repeat(N)}`);
}

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N)}${"@".repeat(N * 3)}`);
}

console.log(result.join("\n"));
