def solution(array):
    answer = 0
    for x in array:
        if str(x).count('7') > 0:
            answer += str(x).count('7')
    return answer