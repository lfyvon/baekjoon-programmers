def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        if not signs[i]:
            absolutes[i] *= -1
        answer += absolutes[i]
    return answer