function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
    s = s.toLowerCase().split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p'){
            p++;
        }
        if (s[i] === 'y'){
            y++;
        }
    }
    if(p !== y){
        answer = false;
    }

    return answer;
}