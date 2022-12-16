function solution(s) {
    var str = s.toLowerCase();
    var answer = str.split(' ').map(el => el.charAt(0).toUpperCase()+el.substring(1)); 
    return answer.join(' ');
}