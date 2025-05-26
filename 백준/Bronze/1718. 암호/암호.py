p = input()
c = input()

result = ''

for i in range(len(p)):
    if p[i] == ' ': result += ' '
    else: result += chr((ord(p[i]) - ord(c[i % len(c)]) - 1) % 26 + ord('a'))

print(result)