n = int(input())
for i in range(n) :
    stats = list(map(int, input().split()))
    print(format(" ".join(map(str, stats))))
    a, b, c = sorted(stats)
    if a >= 10 : print("triple-double\n")
    elif b >= 10 : print("double-double\n")
    elif c >= 10 : print("double\n")
    else : print("zilch\n")