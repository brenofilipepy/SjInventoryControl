@echo off
cls 

:MENU
echo ****************************
echo *  SjInventoryControl      *
echo ****************************
echo.
echo 1. Install Software
echo 2. Update Software
echo 3. Exit
echo.

set /P CHOICE=Choose option (1, 2, or 3): 

IF %CHOICE%==1 (
    echo Instalando o Software...
    REM Adicione aqui os comandos para a instalação do software
    GOTO END
)

IF %CHOICE%==2 (
    echo Atualizando o Software...
    REM Adicione aqui os comandos para a atualização do software
    GOTO END
)

IF %CHOICE%==3 (
    echo Saindo...
    GOTO END
)

echo Opção inválida. Tente novamente.
GOTO MENU


@REM echo Instalando Node.js e dependências...

@REM REM Verifica se o Node.js está instalado
@REM node -v >nul 2>&1
@REM if %errorlevel% neq 0 (
@REM   echo Node.js não encontrado. Instalando...
@REM   REM Substitua a URL abaixo pela versão do Node.js desejada
@REM   curl -o node-setup.exe https://nodejs.org/dist/v14.17.5/node-v14.17.5-x64.msi
@REM   msiexec.exe /i node-setup.exe /quiet /qn /norestart
@REM   del node-setup.exe
@REM )

@REM REM Instala as dependências do Node.js
@REM npm install

@REM echo Inicializando o software...
@REM npm start
