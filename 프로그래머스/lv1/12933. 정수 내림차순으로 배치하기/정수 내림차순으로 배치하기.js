function solution(n) {
    var answer = Number(String(n).split('').map(x => parseInt(x)).sort((a, b) => b - a).join(''));
    return answer;
}