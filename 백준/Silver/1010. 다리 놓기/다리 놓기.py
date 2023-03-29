t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    c = 1
    for i in range(n):
        c *= m - i
        c /= 1 + i
    print(int(c))