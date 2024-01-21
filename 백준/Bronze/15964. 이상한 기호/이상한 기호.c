#include <stdio.h>

int main() {
	long A = 0, B = 0;
	scanf("%ld %ld", &A, &B);
	printf("%ld", (A + B) * (A - B));

	return 0;
}