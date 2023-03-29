n = int(input())
x = list(map(int, input().split()))
max = max(x)
print((sum(x) - max) / 2 + max)