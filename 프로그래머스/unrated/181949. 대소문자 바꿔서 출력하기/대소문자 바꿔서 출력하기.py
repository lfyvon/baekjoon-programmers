str = input()
result = ""
for x in str:
    if x.isupper() :
        result += x.lower()
    else :
        result += x.upper()
print(result)