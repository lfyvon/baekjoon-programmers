def solution(n):
    answer = 0
    for i in range(n + 1):
        count = 1
        for j in range(2, i + 1):
            if i % j == 0:
                count += 1
        if count >= 3:
            answer += 1
    return answer