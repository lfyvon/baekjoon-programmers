function solution(rsp) {
    var answer = rsp.split('').map(function (el){
        if(el === "0") return 5
        else if(el === "2") return 0
        else return 2
    }).join("");
    return answer;
}