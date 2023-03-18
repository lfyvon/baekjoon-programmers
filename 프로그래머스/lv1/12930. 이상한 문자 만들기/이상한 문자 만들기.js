function solution(s) {
    var answer = s.split(' ').map((el) => el.split('').map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ');
    return answer;
}