const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let arr = Array.from(new Array(N), () => new Array(N * 2 - 1).fill(" "));

const recursion = (i, j, n) => {
    if(n === 3){
        arr[i][j] = "*";
        arr[i + 1][j - 1] = "*";
        arr[i + 1][j + 1] = "*";
        for(let k = -2; k < 3; k++){
            arr[i + 2][j + k] = "*";
        }
    } else{
        const next = Math.floor(n / 2);
        recursion(i, j, next);
        recursion(i + next, j - next, next);
        recursion(i + next, j + next, next);
    }
}

recursion(0, N - 1, N);
console.log(arr.map(el => el.join('')).join("\n"));