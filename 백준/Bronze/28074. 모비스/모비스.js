const s = require('fs').readFileSync('/dev/stdin').toString().split('');
const set = new Set(['M', 'O', 'B', 'I', 'S']);
s.map(el => set.delete(el));
console.log(set.size ? "NO" : "YES");