@echo off
echo Starting Portfolio Server...
echo.
echo Your portfolio will be available at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
npx http-server -p 3000 -o
pause
