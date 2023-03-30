l = list(map(int, input().split()))
l.sort()
count = 0
for i in range(len(l)):
    for j in range (i + 1, len(l)):
        for k in range(j + 1, len(l)):
            if l[k] < l[i] + l[j]:
                count += 1
print(count)