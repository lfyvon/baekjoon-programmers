function solution(s){
    const stack = [];
    for(let i = 0; i < s.length; i++){
        stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
    }

    return stack.length > 0 ? 0 : 1;
}