import math

def solution(n):
    answer = 0
    for i in range(1, math.trunc(n**(1/2) + 1)):
        if(n % i == 0):
            answer += 1
    if (n**(1/2)).is_integer():
        return answer * 2 - 1
    else:
        return answer * 2