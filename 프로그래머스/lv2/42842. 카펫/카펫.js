function solution(brown, yellow) {
    var answer = [];
    for(let i = 1; i <= yellow; i++){
        let col = i;
        let row = yellow / i;
        if((row + col) * 2 + 4 === brown){
            answer.push(row+2);
            answer.push(col+2);
            break;
        }
    }
    return answer;
}