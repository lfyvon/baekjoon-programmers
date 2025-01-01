import math

N = int(input())
S = list(map(int, input().split()))
T, P = map(int, input().split())
count = 0

for i in S :
    count += math.ceil(i / T)
print(count)
print(N // P, N % P)