def solution(sides):
    sides.sort();
    sum = sides[0] + sides[1]
    if sides[2] < sum:
        return 1
    else:
        return 2