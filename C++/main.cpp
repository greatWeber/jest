#include <iostream>
#include <string>
using namespace std;

// win+shfit+b 编译

//  函数定义
int add(int a, int b)
{
    return a+b;
}

int count;
extern void write_extern();
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
    

    // 常量
    #define TEST 'test';
    const string NAME = "hello";
    cout << TEST ;
    cout << NAME ;

    count = 5;
   write_extern();

    return 0;
}

