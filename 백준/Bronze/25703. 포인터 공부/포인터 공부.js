const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = "int a;\nint *ptr = &a;\n";
for(let i = 2; i <= N; i++){
    result += `int ${("*".repeat(i))}ptr${i} = &ptr${i - 1 === 1 ? "" : i - 1};\n`
}
console.log(result.trim());