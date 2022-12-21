def solution(n, m):
    answer = [gcd(n, m), lcm(n, m)]
    return answer

def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)

def lcm(a, b):
    return a * b / gcd(a, b)