arr = list(map(int, input().split()))
count = 0
for i in range(len(arr) - 1) :
    if arr[i] < arr[i + 1] :
        count += 1
    else :
        count -= 1
if count == 7 : print('ascending')
elif count == -7 : print('descending')
else : print('mixed')