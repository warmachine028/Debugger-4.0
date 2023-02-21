#include <stdio.h>

int BixFunction(int m)
{
    m *= m;
    int result = ((10) * (m /= m));
    return result;
}
int main()
{
    int c = 9, *d = &c, e;
    int &z = e;
    int result = c-- % 3 ? ++*d : (*d *= *d);
    e = BixFunction(result);
    printf("%i\n", e);
    z = z + e / 10;
    printf("%i %i", c, e);
    return 0;
}