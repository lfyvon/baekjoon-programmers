def solution(n):
    answer = []
    for i in str(n):
        answer.append(i)
    answer.sort(reverse=True)
    return int(''.join(answer))