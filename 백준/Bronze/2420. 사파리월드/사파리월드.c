#include <stdio.h>

int main() {
    long long N, M;
    scanf("%lld %lld", &N, &M);
    printf("%lld", llabs(N - M));
    return 0;
}