N = int(input())

for _ in range(N) :
    S = input()
    if len(S) >= 6 and len(S) <= 9 :
        print("yes")
    else :
        print("no")