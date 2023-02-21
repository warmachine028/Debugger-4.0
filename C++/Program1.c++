#include <iostream>

int main()
{
    int x = 80,
        &y = x,
        *p = &x;
    x++;
    std::cout << x << --y << p << std::endl;

    x = 10;
    x++;
    std::cout << x << y++ << y << std::endl;
    return 0;
}

// $> g++ .\Program1.c++ && .\a.exe
