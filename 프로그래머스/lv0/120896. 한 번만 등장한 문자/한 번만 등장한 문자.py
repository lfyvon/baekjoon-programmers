def solution(s):
    answer = ''
    for x in s:
        count = 0
        for y in s:
            if x == y:
                count += 1
        if count == 1:
            answer += x
    return "".join(sorted(answer))