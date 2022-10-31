function solution(n) {
    var answer = String(n).split('').map(el => parseInt(el)).reverse();
    return answer;
}