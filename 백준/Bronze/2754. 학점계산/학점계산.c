#include <stdio.h>

int main() {

	char score[3];
	double answer = 4.0;
	scanf("%s", score);

	answer -= score[0] - 'A';
	if (score[1] == '+') answer += 0.3;
	if (score[1] == '-') answer -= 0.3;
	if (answer < 0) answer = 0.0;
	printf("%.1lf", answer);

	return 0;
}