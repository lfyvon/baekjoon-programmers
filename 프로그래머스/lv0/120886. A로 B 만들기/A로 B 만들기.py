def solution(before, after):
    answer = 0
    if(sorted(list(before)) == sorted(list(after))):
        answer = 1
    return answer