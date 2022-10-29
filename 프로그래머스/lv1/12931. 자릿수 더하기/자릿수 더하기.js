function solution(n)
{
    let str = n.toString().split('').map(el => parseInt(el));
    var answer = 0;
    answer = str.reduce((acc, cur, idx) => {return acc += cur;}, 0);
    return answer;
}