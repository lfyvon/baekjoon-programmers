function solution(a, b) {
    var answer = 0;
    answer = a;
    while(a !== b){
        answer += b;
        if(a > b){
            b++;
        } else{
            b--;
        }
    }
    return answer;
}