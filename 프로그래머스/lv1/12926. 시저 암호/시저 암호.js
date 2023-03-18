function solution(s, n) {
    let answer = '';
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            answer += ' ';
            continue;
        }
        let select = upper.includes(s[i]) ? upper : lower;
        let idx = select.indexOf(s[i]);
        idx += n;
        if(idx >= 26) idx -= 26;
        answer += select[idx];
    }
    return answer;
}