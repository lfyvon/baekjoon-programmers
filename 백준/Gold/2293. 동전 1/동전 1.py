import sys

n, k = map(int, sys.stdin.readline().split())
coins = [int(sys.stdin.readline()) for _ in range(n)]
dp = [0] * (k + 1)
dp[0] = 1;
for coin in coins:
    for i in range (1, k + 1):
        if i >= coin:
            dp[i] += dp[i - coin]
print(dp[k])