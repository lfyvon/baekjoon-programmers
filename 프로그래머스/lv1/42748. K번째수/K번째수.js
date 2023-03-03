function solution(array, commands) {
    const answer = [];
    for(let x = 0; x < commands.length; x++){
        const [i, j, k] = commands[x];
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    return answer;
}