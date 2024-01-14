#include <stdio.h>
#include <string.h>

int main() {
	int T;
	char str[1001];
	scanf("%d", &T);
	for (int i = 0; i < T; i++)
	{
		scanf("%s", str);
		printf("%c%c \n", str[0], str[strlen(str) - 1]);
	}
    return 0;
}