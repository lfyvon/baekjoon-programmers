def solution(numbers):
    answer = 0
    count = 0
    for num in numbers:
        count = count + 1
        answer += num
    return answer / count