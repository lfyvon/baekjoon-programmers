function solution(answers) {
    var answer = [];
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === a[i % a.length]) score[0]++;
        if(answers[i] === b[i % b.length]) score[1]++;
        if(answers[i] === c[i % c.length]) score[2]++;
    }
    const max = Math.max(...score);
    for(let i = 0; i < score.length; i++){
        if(score[i] === max) answer.push(i + 1);
    }
    return answer;
}