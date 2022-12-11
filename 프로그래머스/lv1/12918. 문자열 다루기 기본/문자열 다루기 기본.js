function solution(s) {
    var answer = true;
    if(s.length !== 4 && s.length !== 6){
        answer = false;
    } else if(isNaN(s)){
        answer = false;   
    } else if(s.includes('e')){
        answer = false;
    }
    return answer;
}