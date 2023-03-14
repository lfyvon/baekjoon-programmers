n = int(input())
count = 0;
for i in range(1, n + 1):
    s = sum([int(j) for j in str(i)])
    if(i % s == 0):
        count += 1
print(count)