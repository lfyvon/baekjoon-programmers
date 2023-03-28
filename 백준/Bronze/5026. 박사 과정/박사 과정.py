n = int(input())
for _ in range(n):
    exp = input()
    if exp == 'P=NP':
        print('skipped')
    else:
        a, b = map(int, exp.split('+'))
        print(a + b)