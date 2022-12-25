const id = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(`:fan::fan::fan:
:fan::${id}::fan:
:fan::fan::fan:`);