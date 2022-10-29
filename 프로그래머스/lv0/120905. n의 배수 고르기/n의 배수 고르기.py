def solution(n, numlist):
    answer = [x for x in numlist if x % n == 0]
    return answer