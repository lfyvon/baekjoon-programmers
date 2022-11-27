function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            answer += absolutes[i];
        } else{
            answer += -1 * absolutes[i];
        }
    }
    return answer;
}