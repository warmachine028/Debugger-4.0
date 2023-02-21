#include <stdio.h>
int main()
{
	for(int i = 1;i <= 4 ;i++) {
		for(int z = 1 ; z <= 4 ; z++) {
			if(z % 2 == 0)
				printf("%d",z);
			else
				printf(" ");
		}
        printf("\n");
    }
    return 0;
}
/* must print 
   2 4
   2 4
   2 4
   2 4
*/
