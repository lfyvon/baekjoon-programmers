def solution(n):
    answer = 1
    i = 0
    while True:
        i += 1
        if(answer * i <= n):
            answer *= i
        else:
            i -= 1
            break
    return i