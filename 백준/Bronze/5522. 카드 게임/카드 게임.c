#include <stdio.h>

int main() {
	int i = 0;
	int num = 0, sum = 0;
	for (i = 0; i < 5; i++) {
		scanf("%d", &num);
		sum += num;
	}
	printf("%d", sum);

	return 0;
}