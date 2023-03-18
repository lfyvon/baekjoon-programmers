function solution(n) {
    var answer = 0;
    let count = n.toString(2).split('').filter(el => el === '1').length;
    while(true){
        n++;
        if(n.toString(2).split('').filter(el => el === '1').length === count){
            break;
        }
    }
    answer = n;
    return answer;
}