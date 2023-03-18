function solution(M, N) {
    var answer = 0;
    const [max, min] = [Math.max(M, N), Math.min(M, N)];
    return (min - 1) + min * (max - 1);
}