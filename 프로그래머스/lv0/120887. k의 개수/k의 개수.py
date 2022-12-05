def solution(i, j, k):
    answer = 0
    for i in range(i, j + 1):
        arr = list(str(i));
        for j in arr:
            if(k == int(j)):
                answer += 1
    return answer