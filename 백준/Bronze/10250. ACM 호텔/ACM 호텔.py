import math

T = int(input())
for _ in range(T):
    H, W, N = map(int, input().split())
    print(str((N - 1) % H + 1) + str(math.ceil(N / H)).zfill(2))