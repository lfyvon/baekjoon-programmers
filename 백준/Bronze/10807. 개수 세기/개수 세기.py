N = int(input())
arr = list(map(int, input().split()))
v = int(input())

count = 0
for x in arr :
    if x == v :
        count += 1

print(count)