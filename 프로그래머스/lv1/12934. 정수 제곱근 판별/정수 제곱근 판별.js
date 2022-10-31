function solution(n) {
    var answer = -1;
    for(let i = 1; i <= n; i++){
        if(i*i === n){
            answer = (i+1) * (i+1);
            break;
        } else if(i*i > n){
            break;
        }
    }
    
    return answer;
}