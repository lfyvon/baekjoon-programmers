const [n, r, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));


const recursion = (x, y, num) => {
    if(num === 0) return 0;
    let size = Math.pow(2, num - 1);
    if(x < size && y < size){
        return recursion(x, y, num - 1);
    } else if(x < size && y >= size){
        return size * size + recursion(x, y - size, num - 1);
    } else if(x >= size && y < size){
        return 2 * size * size + recursion(x - size, y, num - 1);
    } else if(x >= size && y >= size){
        return 3 * size * size + recursion(x - size, y - size, num - 1);
    }
}

console.log(recursion(r, c, n));