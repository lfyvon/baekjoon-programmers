def solution(left, right):
    answer = 0
    for i in range(left, right + 1):
        if float(i ** (1 / 2)).is_integer():
            answer -= i
        else:
            answer += i
    return answer