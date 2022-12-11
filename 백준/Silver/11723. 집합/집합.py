import sys

input = sys.stdin.readline
bit = 0
t = int(input())
for i in range(t):
    cmd = input().split()
    if cmd[0] == 'all':
            bit = (1 << 20) - 1
    elif cmd[0] == 'empty':
        bit = 0
    else:
        num = int(cmd[1]) - 1
        if cmd[0] == 'check':
            if bit & (1 << num) == 0:
                print(0)
            else:
                print(1)
        elif cmd[0] == 'add':
            bit |= (1 << num)
        elif cmd[0] == 'remove':
            bit &= ~(1 << num)
        elif cmd[0] == 'toggle':
            bit = bit ^ (1 << num)