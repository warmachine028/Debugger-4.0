#include <stdio.h>

void function(int var1, int var2)
{
    printf("%i %i\n", var1, var2);
}

void main()
{
    int x = 80, z = 10;
    function(++x, z++);
    function(++x, ++z);
}