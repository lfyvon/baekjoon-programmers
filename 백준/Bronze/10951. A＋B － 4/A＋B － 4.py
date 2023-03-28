while 1:
    try:
        a, b = map(int, input().split())
    except:
        break
    print(a + b)