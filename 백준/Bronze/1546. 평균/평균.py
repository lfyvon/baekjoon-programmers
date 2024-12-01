N = int(input())
score = list(map(int, input().split()))
maxNum = max(score)

print(sum(x / maxNum * 100 for x in score) / N)