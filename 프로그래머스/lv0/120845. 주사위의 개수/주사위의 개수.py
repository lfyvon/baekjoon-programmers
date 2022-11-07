def solution(box, n):
    answer = 1
    for i in range(len(box)):
        answer *= box[i] // n 
    return answer