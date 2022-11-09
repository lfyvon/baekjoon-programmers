def solution(age):
    arr = list(str(age))
    answer = ''
    for i in arr:
        answer += chr(int(i) + 97)
    return answer