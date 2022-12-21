function solution(n, m) {
    let answer = [];
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    answer.push(gcd(n, m));
    answer.push(lcm(n, m));
    return answer;
}