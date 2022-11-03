def solution(numbers, direction):
    answer = []
    num = 0
    if direction == "right":
        num = numbers.pop(-1)
        numbers.insert(0, num)
    else:
        num = numbers.pop(0)
        numbers.append(num)
    return numbers