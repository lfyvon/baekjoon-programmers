function solution(n) {
    var answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return answer;
}