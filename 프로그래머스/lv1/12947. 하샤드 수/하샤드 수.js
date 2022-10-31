function solution(x) {
    var answer = true;
    var str = x.toString().split('').map(el => parseInt(el));
    if(x % str.reduce((pre, cur) => pre + cur, 0) !== 0) {
        answer = false;
    }
    return answer;
}