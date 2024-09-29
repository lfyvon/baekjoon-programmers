N = int(input())
sum = N * (N + 1) // 2;
square = sum * sum;
cube = 0;
for i in range(1, N + 1) :
    cube += i ** 3
print(sum);
print(square);
print(cube);