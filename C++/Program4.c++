#include <stdio.h>


int main(){
    int m = 2, n = 6;
    int &x = m++;
    int &y = n++;
    m = x++;
    x = m++;
    n = y++;
    y = n++;
}