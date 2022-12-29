function solution(babbling) {
    var count = 0;
    for(let i = 0; i < babbling.length; i++){
        let str = babbling[i].replace('aya', '1').replace('ye', '1').replace('woo', '1').replace('ma', '1');
        if(!isNaN(str)) count++; 
    }
    return count;
}