N = int(input())
for _ in range(N) :
    str = input()
    total = 0
    count = 0
    for s in str :
        if s == 'O' :
            count += 1
            total += count
        else :
            count = 0
    print(total)
