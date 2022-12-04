def solution(num_list, n):
    answer = []
    arr = []
    for i in range(len(num_list)):
        arr.append(num_list[i])
        if len(arr) == n:            
            answer.append(arr)
            arr = []
    return answer