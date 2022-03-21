dir=class02-materials

pushd ../$dir
git filter-repo --to-subdirectory-filter $dir
popd
read foo
git remote add classmat $dir \
&& git fetch classmat --tags \
&& git merge --allow-unrelated-histories classmat/main
git remote remove classmat
