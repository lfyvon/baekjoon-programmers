def solution(price, money, count):
    answer = 0
    for i in range(count):
        money -= (i + 1) * price
    if money < 0:
        return money * -1
    return answer