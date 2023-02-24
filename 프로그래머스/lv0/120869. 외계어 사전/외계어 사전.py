def solution(spell, dic):
    answer = 2
    arr = []
    for x in dic:
        for y in spell:
            x = x.replace(y, '1', 1)
        arr.append(x)
            
    for x in arr:
        if len(x) == len(spell) and str.isdigit(x):
            answer = 1
    return answer