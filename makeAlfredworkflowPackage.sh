#!/usr/bin/env bash
zip -r  rio.alfredworkflow ./*
zip -r rio.alfredworkflow ./.git
zip rio.zip  ./rio.alfredworkflow
mv ./rio.alfredworkflow ~/Desktop/
mv ./rio.zip ~/Desktop/

