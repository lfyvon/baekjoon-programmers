function solution(p) {
    if(p === "") return '';
    let u, v;
    let count = 0;
    for(let i = 0; i < p.length; i++){
        p[i] === '(' ? count++ : count--;
        if(!count){
            u = p.slice(0, i + 1);
            v = p.slice(i + 1);
            break;
        }
    }
    
    for(let i = 0; i < u.length; i++){
        u[i] === '(' ? count++ : count--;
        if(count < 0){
            let str = ""
            str += `(${solution(v)})`;
            for(let j = 1; j < u.length - 1; j++){
                u[j] === '(' ? str += ')' : str += '(';
            }
            return str;
        }        
    }
    
    return u + solution(v);
}