#!/bin/bash
rm ~/xflow-systems.github.io/docs -rf
bun run build
cp -r . ~/xflow-systems.github.io/docs
cd ~/xflow-systems.github.io/
git add .
git commit -m "update"
git push
