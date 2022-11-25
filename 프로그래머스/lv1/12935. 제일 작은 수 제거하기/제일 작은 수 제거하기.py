def solution(arr):
    arr.remove(min(arr))
    answer = arr
    if not answer:
        return [-1]
    return answer