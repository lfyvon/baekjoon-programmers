L, P = map(int, input().split())
news =  list(map(int, input().split()))
for x in news :
    print(x - (L * P), end=' ')