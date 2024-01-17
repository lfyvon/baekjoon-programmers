#include <stdio.h>

int main() {
    long long N, M;
    scanf("%ld %ld", &N, &M);
    printf("%ld", labs(N - M));
    return 0;
}