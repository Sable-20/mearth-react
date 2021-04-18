@echo off

SET start-lower=start
SET start-upper=START
SET build-lower=build
SET build-upper=BUILD


if "%1" == "start" set result=true
if "%1" == "START" set result=true
if "%1" == "build" set result=true
if "%1" == "BUILD" set result=true

if "%1" EQU "" (
    @echo on
    echo "You need to provide and argument"
    PAUSE
    exit
)

if %result% == true (
    if "%1" == "start" (
        docker build startenv -t mearth
        @echo on
        docker run --rm -it %CD%:/root/env mearth
    ) 

    if "%1" == "START" (
        docker build startenv -t mearth
        @echo on
        docker run --rm -it %CD%:/root/env mearth
    ) 

    if "%1" == "build" (
        docker build buildenv -t mearth
        @echo on
        docker run --rm %CD%:/root/env mearth
    )

    if "%1" == "BUILD" (
        docker build buildenv -t mearth
        @echo on
        docker run --rm %CD%:/root/env mearth
    )
) else (
    @echo on
    echo "You need to provide build or start"
    PAUSE
    exit 
)