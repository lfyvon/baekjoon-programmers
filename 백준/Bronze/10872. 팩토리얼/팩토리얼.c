#include <stdio.h>

int main() {
    int N, fact = 1;
    scanf("%d", &N);
    for (int i = 1; i <= N; i++) {
        fact *= i;
    }
    printf("%d", fact);
	return 0;
}