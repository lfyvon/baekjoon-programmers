function solution(numbers) {
    var answer = 45 - numbers.reduce((a, b) => (a + b));
    return answer;
}