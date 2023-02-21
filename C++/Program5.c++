#include <stdio.h>

enum xyz
{
    a,
    b,
    c
};
int main()
{
    // int x = a, y = b, z = c;
    // int &p = x, &q = y, &r = z;
    // p = ++x;
    // q = ++y;
    // r = ++c;
    // printf("%i %i %i", p, q, r);

    int arr[] = {1, 2, 3, 4, 5};
    int *zarr = arr;
    for (int i = 0; i <= 4; i++)
        arr[i] += arr[i];
    for (int i = 0; i <= 4; i++)
        printf("%i ", zarr[i]);
    return 0;
}