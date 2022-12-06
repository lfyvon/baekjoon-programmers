def solution(array, n):
    answer = 0
    index = 0
    array.sort()
    for i in range(len(array)):
        if array[i] <= n:
            answer = array[i]
            index = i 
    if index != len(array) - 1 and array[index + 1] - n < n - array[index]:
        answer = array[index + 1]
    return answer