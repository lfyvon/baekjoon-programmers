ds, ys = list(map(int, input().split()))
dm, ym = list(map(int, input().split()))
sun = ys - ds
moon = ym - dm
while sun != moon :
    if sun < moon :
        sun = sun + ys
    else :
        moon = moon + ym
print(sun)