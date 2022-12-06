function solution(s) {
    var answer = s.split('').sort((a, b) => {
        return a === b ? 0 : a < b ? 1 : -1;
    });
    return answer.join('');
}