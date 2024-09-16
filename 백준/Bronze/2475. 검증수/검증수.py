arr = map(int, input().split())
print(sum(map(lambda n : n**2, arr)) % 10)