function solution(s) {
    var answer = s.split(" ");
    return Math.min(...answer) + ' ' + Math.max(...answer);
}