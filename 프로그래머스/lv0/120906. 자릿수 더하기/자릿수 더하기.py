def solution(n):
    print (list(map(int,list(str(n)))))
    return sum(map(int, str(n)))