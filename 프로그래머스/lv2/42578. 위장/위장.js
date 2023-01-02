function solution(clothes) {
    var answer = 0;
    const costume = new Map();
    for(let i = 0; i < clothes.length; i++){
        const [name, type] = clothes[i];
        if(costume.has(type)){
            costume.set(type, costume.get(type) + 1)
        } else{
            costume.set(type, 1)
        }
        console.log(costume)
    }
    let count = [...costume.values()].reduce((a, b) => a * (b + 1), 1) - 1;
    answer = count;
    return answer;
}