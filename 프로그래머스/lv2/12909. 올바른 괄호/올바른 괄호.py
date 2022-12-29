def solution(s):
    answer = True
    count = 0
    for i in range(len(s)):
        if s[0] == ')' or count < 0:
            answer = False
            break
        if s[i] == '(':
            count += 1
        if s[i] == ')':
            count -= 1
    if count != 0:
        answer = False
    return answer