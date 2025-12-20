@echo off
chcp 65001 >nul
echo ========================================
echo        MkDocs 博客自动更新脚本
echo ========================================

REM 设置颜色
color 0A

REM 检查是否在Git仓库中
git status >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：当前目录不是Git仓库！
    pause
    exit /b 1
)

REM 获取提交信息
set /p commit_msg=请输入提交信息（默认为update）: 
if "%commit_msg%"=="" set commit_msg=update

echo.
echo 🔍 检查文件状态...
echo ========================================
git status

echo.
echo 📦 正在添加文件...
echo ========================================
git add .

echo.
echo 💾 正在提交更改...
echo ========================================
git commit -m "%commit_msg%"

echo.
echo 🚀 正在推送到GitHub...
echo ========================================
git push origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ✅ 更新完成！网站将在几分钟内自动部署。
    echo 📍 访问：https://你的用户名.github.io/仓库名
    timeout /t 5 /nobreak >nul
) else (
    echo ❌ 推送失败，请检查网络或配置。
    pause
)

exit /b %ERRORLEVEL%