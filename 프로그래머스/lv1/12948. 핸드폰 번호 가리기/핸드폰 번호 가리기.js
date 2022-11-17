function solution(phone_number) {
    let len = phone_number.length-4;
    let number = phone_number.slice(-4, phone_number.length);
    var answer = Array(len).fill('*').join('').toString()+number.toString();
    return answer;
}