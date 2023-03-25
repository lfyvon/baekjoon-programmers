h, m = map(int, input().split())
if m < 45:
    m += 15
    h -= 1
    if h < 0:
        h = 23
else:
    m -= 45
print(h, m)