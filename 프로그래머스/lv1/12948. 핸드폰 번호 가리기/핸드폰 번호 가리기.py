def solution(phone_number):
    answer = phone_number[-4:]
    return answer.rjust(len(phone_number), '*')