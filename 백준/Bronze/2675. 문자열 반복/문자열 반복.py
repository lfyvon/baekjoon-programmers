T = int(input())
for i in range(T) :
    R, S = input().split()
    R = int(R)
    res = ""
    for s in S :
        res += s * R
    print(res)