@echo off
title �����޸��ļ�����
setlocal EnableDelayedExpansion
:: �����ӳٱ�������

:GetPath
set zpath=%CD%
:: �Ա������г�ʼ������ֹ�û��������ֱ������������%CD%��ʾ��ǰ·��
set /p zpath=������Ŀ���ļ����ڵ�·����
if %zpath:~0,1%%zpath:~-1%=="" set zpath=%zpath:~1,-1%
:: ������ zpath �ĵ�һ�������һ���ַ��Ƿ�Ϊ "" ���ǵĻ���ȥ��
if not exist "%zpath%" goto :GetPath
:: ��� zpath ֵ��·�������ڣ��͵���ת��ȥ��Ҫ����������

set answer=N
echo.
echo ����ͼ�� %zpath%\ ��������ļ��޸����ݣ��Ƿ������
set /p answer=���������� Y ����������������...
if "%answer%"=="Y" goto :ReadyToRename
if "%answer%"=="Y" goto :ReadyToRename
 
echo �����ļ���������������˳�... & goto :PauseThenQuit

:ReadyToRename
 
set /a num=0
echo.
 
echo ��ʼ
CD %zpath%
for /R %%i in (*) do (
    set /a num+=1
	echo %%i
    echo "">>%%i || echo �ļ� %%i �޸ĳɹ� && set /a num-=1
)

 
if %num%==0 echo %zpath%\ ��δ�����κ��ļ�����������˳�... & goto :PauseThenQuit
 
echo �ļ��޸���ɣ���������˳�...



:PauseThenQuit
pause>nul