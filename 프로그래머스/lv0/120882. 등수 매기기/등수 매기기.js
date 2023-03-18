function solution(score) {
    const answer = score.map(([a, b]) => (a + b) / 2)
    const rank = answer.slice().sort((a, b) => b - a);
    return answer.map(el => rank.indexOf(el) + 1);
}