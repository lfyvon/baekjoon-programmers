mul = 1
for _ in range(3):
    mul *= int(input())

mul = str(mul)

list = [0] * 10;

for n in mul :
    list[int(n)] += 1

for i in list :
    print(i)