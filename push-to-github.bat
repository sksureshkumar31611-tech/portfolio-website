@echo off
echo 🚀 GitHub Push Script for Portfolio Website
echo ========================================
echo.

echo 📋 Step 1: Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    echo Then restart your computer and run this script again
    pause
    exit /b 1
)

echo ✅ Git is installed
echo.

echo 📋 Step 2: Initializing Git repository...
git init
echo.

echo 📋 Step 3: Adding all files...
git add .
echo.

echo 📋 Step 4: Creating commit...
git commit -m "Portfolio website with modern animations and effects"
echo.

echo 📋 Step 5: Checking remote repository...
git remote -v | findstr "origin" >nul
if %errorlevel% neq 0 (
    echo ⚠️  No remote repository found
    echo Please create a GitHub repository first
    echo Then run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    echo Replace YOUR_USERNAME and REPO_NAME with your actual values
    pause
    exit /b 1
)

echo ✅ Remote repository found
echo.

echo 📋 Step 6: Pushing to GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo 🎉 SUCCESS! Your portfolio has been pushed to GitHub!
    echo 📁 Repository URL: Check your GitHub account
    echo 🌐 If using GitHub Pages: https://YOUR_USERNAME.github.io/REPO_NAME
) else (
    echo.
    echo ❌ Push failed. Please check:
    echo 1. Your GitHub credentials
    echo 2. Repository URL is correct
    echo 3. You have permission to push
    echo 4. Internet connection
)

echo.
pause
