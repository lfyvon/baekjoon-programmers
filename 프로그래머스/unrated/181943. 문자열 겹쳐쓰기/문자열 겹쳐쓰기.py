def solution(my_string, overwrite_string, s):
    answer = ''
    for i in range(len(my_string)):
        if i >= s and i < len(overwrite_string) + s:
            answer += overwrite_string[i - s]
        else:
            answer += my_string[i]
    return answer