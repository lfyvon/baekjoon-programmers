#include <stdio.h>

int main() {
    char S[1001];
    int i;

    scanf("%s", S);
    scanf("%d", &i);

    printf("%c", S[i - 1]);

    return 0;
}