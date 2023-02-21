#include <iostream>
using namespace std;

class IndiaBix
{
    int x, y;

public:
    void SetValue(int &xx, int &yy)
    {
        x = xx++;
        y = yy;
        Display();
    }
    void Display()
    {
        cout << x << " " << y;
    }
};
int main()
{
    int x = 10;
    int &y = x;
    IndiaBix objBix;
    objBix.SetValue(x, y);
    return 0;
}