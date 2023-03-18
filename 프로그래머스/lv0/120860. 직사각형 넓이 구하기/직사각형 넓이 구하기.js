function solution(dots) {
    const w = Math.max(...dots.map(el => el[0])) - Math.min(...dots.map(el => el[0]));
    const h = Math.max(...dots.map(el => el[1])) - Math.min(...dots.map(el => el[1]));
    return w * h;
}