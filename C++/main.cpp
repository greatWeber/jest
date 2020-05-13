#include <iostream>
using namespace std;

//  函数定义
int add(int a, int b)
{
    return a+b;
}
int main()
{
    cout <<"hello world !!"<< endl;
    // typedef 声明
    typedef int Int;
    Int b = 123;
    cout << b << endl;
    // 枚举
    enum Color {red,green,blue} color;
    color = green;
    cout << color << endl;

    int c = add(1, 2);
    cout << c << endl;
    return 0;
}

