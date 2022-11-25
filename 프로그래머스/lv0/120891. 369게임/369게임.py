def solution(order):
    answer = 0
    num_list = list(map(int, str(order)))
    for i in range(len(num_list)):
        if num_list[i] == 3 or num_list[i] == 6 or num_list[i] == 9:
            answer += 1
    return answer