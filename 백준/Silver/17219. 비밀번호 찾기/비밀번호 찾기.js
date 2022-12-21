let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0]
  .trim()
  .split(" ")
  .map((el) => parseInt(el));
let siteList = new Map();
let result = [];
for (let i = 1; i <= n; i++) {
  const [s, p] = input[i].trim().split(" ");
  siteList.set(s, p);
}
const question = input.slice(n + 1, input.length).map((el) => el.trim());

question.forEach((el) => {
  result.push(siteList.get(el));
});

console.log(result.join("\n"));