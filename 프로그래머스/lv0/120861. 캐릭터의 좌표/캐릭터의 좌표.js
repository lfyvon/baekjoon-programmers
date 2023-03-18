function solution(keyinput, board) {
    let x = y = 0;
    const range = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === 'up') y++;
        if(keyinput[i] === 'down') y--;
        if(keyinput[i] === 'left') x--;
        if(keyinput[i] === 'right') x++;
        
        if(Math.abs(x) > range[0]) x = x > 0 ? range[0] : range[0] * -1;
        if(Math.abs(y) > range[0]) y = y > 0 ? range[1] : range[1] * -1;
    }
    return [x, y];
}