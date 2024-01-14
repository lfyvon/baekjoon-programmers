#include <stdio.h>


int main() {
    int num, re = 0;

    for (int i = 0; i < 5; i++) {
        scanf("%d", &num);
        re = re + num * num;
    }

    printf("%d\n", re % 10);
    
    return 0;
}