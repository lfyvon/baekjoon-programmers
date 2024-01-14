#include <stdio.h>

int main() {
	char str[100];
	int length = 0;

	scanf("%s", str);

	while (1) {
		if (str[length] != NULL)
			length++;
		else
			break;
	}

	printf("%d", length);

	return 0;
}