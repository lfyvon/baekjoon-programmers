T = int(input())
for i in range(T) :
    N = int(input())
    last = 1
    for j in range(2, N + 1) : 
        last = last * j % 10
    print(last)