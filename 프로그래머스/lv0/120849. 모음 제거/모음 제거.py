import re

def solution(my_string):
    answer = re.sub("a|e|i|o|u", "", my_string)
    return answer