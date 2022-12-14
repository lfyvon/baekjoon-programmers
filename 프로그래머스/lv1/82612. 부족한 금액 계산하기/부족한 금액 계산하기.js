function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for (let i = 1; i <= count; i++){
        totalPrice += i * price;
    }
    answer = totalPrice - money;
    return answer > 0 ? answer : 0;
}