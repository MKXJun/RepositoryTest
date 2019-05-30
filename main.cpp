#include <iostream>

// 中文注释测试

int main()
{
	setlocale(LC_ALL, "ZH_CN");
	wprintf_s(L"测试中文内容输出");
	return 0;
}