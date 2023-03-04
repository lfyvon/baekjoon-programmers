function solution(numbers) {
    let answer = '';
    numbers = numbers.map(el => el+"");
    numbers.sort((a, b) => (b + a) - (a + b));
    answer = numbers.join('');
    return answer[0] === '0' ? '0' : answer;
}