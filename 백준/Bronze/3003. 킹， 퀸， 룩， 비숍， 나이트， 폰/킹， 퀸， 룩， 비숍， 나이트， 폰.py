chess = [1, 1, 2, 2, 2, 8]

list = list(map(int, input().split()))

for i in range(len(list)):
    print(chess[i] - list[i], end=' ')