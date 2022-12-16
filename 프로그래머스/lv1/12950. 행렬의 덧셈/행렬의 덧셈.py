def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        sum = []
        for j in range(len(arr1[i])):
            sum.append(arr1[i][j] + arr2[i][j])
        answer.append(sum)
    return answer