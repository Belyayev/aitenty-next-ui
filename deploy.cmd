@echo off
echo Handling node.js deployment.

:: 1. KuduSync
call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
IF !ERRORLEVEL! NEQ 0 goto error

:: 2. Install npm packages
echo Installing npm packages...
pushd "%DEPLOYMENT_TARGET%"
call :ExecuteCmd npm install --production
IF !ERRORLEVEL! NEQ 0 goto error
popd

:: 3. Done
echo Deployment finished successfully.
goto end

:ExecuteCmd
setlocal
set CMD=%*
call %CMD%
if "%ERRORLEVEL%" NEQ "0" exit /b %ERRORLEVEL%
exit /b 0

:error
echo An error has occurred during web site deployment.
exit /b 1

:end
