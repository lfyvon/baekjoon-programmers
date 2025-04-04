const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const result = [];

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N * 3)}${"@".repeat(N)}`);
}

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N * 2)}${"@".repeat(N)}`);
}

for(let i = 0; i < N; i++){
    result.push("@".repeat(N * 3));
}

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N * 2)}${"@".repeat(N)}`);
}

for(let i = 0; i < N; i++){
    result.push(`${"@".repeat(N)}${" ".repeat(N * 3)}${"@".repeat(N)}`);
}

console.log(result.join("\n"));
