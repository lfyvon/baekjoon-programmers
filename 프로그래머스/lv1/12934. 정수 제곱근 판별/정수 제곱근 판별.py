def solution(n):
    num = n ** (1 / 2)
    answer = 0
    if float(num).is_integer():
        answer = (num + 1) ** 2
    else:
        answer = -1
    return answer