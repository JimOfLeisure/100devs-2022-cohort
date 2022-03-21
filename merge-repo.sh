dir=../class02-materials

git remote add classmat $dir \
&& git fetch classmat --tags \
&& git merge --allow-unrelated-histories classmat/main
git remote remove classmat
