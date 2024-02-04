#include <stdio.h>

int main()
{
    char str1[1000], str2[1000];
    int cnt1 = 0, cnt2 = 0;
    scanf("%s", str1);
    scanf("%s", str2);

    for (int i = 0; str1[i] != 'h'; i++)
    {
        cnt1++;
    }
    for (int i = 0; str2[i] != 'h'; i++)
    {
        cnt2++;
    }

    if (cnt1 >= cnt2)
        printf("go");
    else
        printf("no");


    return 0;
}