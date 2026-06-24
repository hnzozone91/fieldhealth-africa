@echo off
echo ================================================
echo  FosaFinanceCalc v2.0 - Windows Build
echo  Dr. Nzozone Henry Fomukong
echo ================================================
echo.

node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js not found.
    echo Please install Node.js LTS from https://nodejs.org
    pause
    exit /b 1
)
echo [1/3] Node.js: 
node --version
echo.

echo [2/3] Installing dependencies (first run: 5-10 minutes)...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed. Check your internet connection.
    pause
    exit /b 1
)
echo Dependencies installed successfully.
echo.

echo [3/3] Building Windows installer...
call npm run dist:win
if errorlevel 1 (
    echo ERROR: Build failed.
    pause
    exit /b 1
)

echo.
echo ================================================
echo  BUILD COMPLETE
echo.
echo  Output files in dist\ folder:
dir /b dist\*.exe 2>nul
echo.
echo  Distribute: FosaFinanceCalc-Setup-2.0.0.exe
echo ================================================
pause
