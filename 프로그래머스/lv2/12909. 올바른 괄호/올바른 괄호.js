function solution(s){
    var answer = true;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[0] === ')' || count < 0){
            answer = false;
            break;
        } else if (s[i] === '('){
            count++;
        } else {
            count--;
        }
    }
    if(count !== 0){
        answer = false;
    }

    return answer;
}