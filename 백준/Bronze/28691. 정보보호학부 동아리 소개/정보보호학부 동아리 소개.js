const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const club = {
    "M" : "MatKor",
    "W" : "WiCys",
    "C" : "CyKor",
    "A" : "AlKor",
    "$" : "$clear"
}
console.log(club[input]);