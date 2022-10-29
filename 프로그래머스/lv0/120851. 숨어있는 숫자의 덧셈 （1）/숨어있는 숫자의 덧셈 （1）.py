import re

def solution(my_string):
    num_string = re.sub(r'[^0-9]', '', my_string)
    answer = 0
    for i in num_string:
        answer += int(i)
    return answer