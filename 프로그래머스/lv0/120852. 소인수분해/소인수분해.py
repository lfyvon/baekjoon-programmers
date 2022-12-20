def solution(n):
    answer = []
    i = 2
    while n != 1:
        if n % i == 0:
            answer.append(i)
            while n % i == 0:
                n /= i
        i += 1                  
    return answer