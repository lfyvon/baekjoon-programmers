input = input()
dLen = 10
cLen = 26
check = 0
result = 1
for i in range(len(input)) :
    if i > 0 and input[i - 1] == input[i] :
        check = 1;
    else :
        check = 0;
    if input[i] == "d" :
        if check == 1 : 
            result *= dLen - 1
        else :
            result *= dLen
    else :
        if check == 1 : 
            result *= cLen - 1
        else :
            result *= cLen
print(result)