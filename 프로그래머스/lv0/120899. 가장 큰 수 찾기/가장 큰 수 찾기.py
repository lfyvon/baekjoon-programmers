def solution(array):
    maxNum = max(array)
    answer = [maxNum, array.index(maxNum)]
    return answer