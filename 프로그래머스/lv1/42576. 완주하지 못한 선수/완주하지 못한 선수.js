function solution(participant, completion) {
    let answer = '';
    const map = new Map();
    for(let i = 0; i < participant.length; i++){
        if(map.has(participant[i])){
            map.set(participant[i], map.get(participant[i]) + 1);
        } else{
            map.set(participant[i], 1);
        }
    }
    
    for(let i = 0; i < completion.length; i++){
        if(map.has(completion[i])){
            map.set(completion[i], map.get(completion[i]) - 1);
        }
    }
    answer = [...map].sort((a, b) => b[1] - a[1])[0][0]
    return answer;
}