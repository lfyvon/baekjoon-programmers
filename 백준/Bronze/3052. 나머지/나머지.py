list = []
for _ in range(10) :
    N = int(input())
    list.append(N % 42)
print(len(set(list)))