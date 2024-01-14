#include <stdio.h>

int main() {
    int chess[6] = { 1,1,2,2,2,8 }, i, p;
    for (i = 0; i < 6; i++) {
        scanf("%d", &p);
        printf("%d ", chess[i] - p);
    }
    return 0;
}