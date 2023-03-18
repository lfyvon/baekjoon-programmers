function solution(n) {
    var answer = [];
    for(let i = 0; i <= n; i++){
        if(i <= 1){
            answer[i] = i;
        } else {
            answer[i] = (answer[i-1] + answer[i-2]) % 1234567;
        }
    }
    return answer[n];
}