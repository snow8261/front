@echo off
title 批量修改文件内容
setlocal EnableDelayedExpansion
:: 启用延迟变量扩充

:GetPath
set zpath=%CD%
:: 对变量进行初始化，防止用户不输入而直接跳过。其中%CD%表示当前路径
set /p zpath=请输入目标文件所在的路径：
if %zpath:~0,1%%zpath:~-1%=="" set zpath=%zpath:~1,-1%
:: 检查变量 zpath 的第一个和最后一个字符是否为 "" ，是的话就去掉
if not exist "%zpath%" goto :GetPath
:: 如果 zpath 值的路径不存在，就得跳转回去，要求重新输入

set answer=N
echo.
echo 您试图将 %zpath%\ 里的所有文件修改内容，是否继续？
set /p answer=继续请输入 Y ，输入其它键放弃...
if "%answer%"=="Y" goto :ReadyToRename
if "%answer%"=="Y" goto :ReadyToRename
 
echo 放弃文件改名，按任意键退出... & goto :PauseThenQuit

:ReadyToRename
 
set /a num=0
echo.
 
echo 开始
CD %zpath%
for /R %%i in (*) do (
    set /a num+=1
	echo %%i
    echo "">>%%i || echo 文件 %%i 修改成功 && set /a num-=1
)

 
if %num%==0 echo %zpath%\ 里未发现任何文件。按任意键退出... & goto :PauseThenQuit
 
echo 文件修改完成，按任意键退出...



:PauseThenQuit
pause>nul