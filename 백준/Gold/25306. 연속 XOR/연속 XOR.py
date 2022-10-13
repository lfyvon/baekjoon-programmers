a, b = map(int, input().split())

def xorCalculation(n):
    div = n % 4;
    if div == 1:
        return 1;
    elif div == 2:
        return n + 1;
    elif div == 3:
        return 0;
    else:
        return n;

print(xorCalculation(a - 1) ^ xorCalculation(b));