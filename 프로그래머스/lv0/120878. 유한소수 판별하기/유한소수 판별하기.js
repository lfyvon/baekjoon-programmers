function solution(a, b) {
    var answer = [];
    let n = divisor(a);
    let d = divisor(b);
    answer = d.filter(el => !n.includes(el)).every(el => el % 2 === 0 || el % 5 === 0);
    return answer ? 1 : 2;
}

function divisor(n){
    let d = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            d.push(i);
            if(n / i !== i) d.push(n / i);
        }
    }
    return d.sort((a, b) => a - b);
}