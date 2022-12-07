def solution(emergency):
    answer = []
    for x in emergency:
        count = 0
        for y in emergency:
            if x <= y:
                count += 1
        answer.append(count)
    return answer