dir=class-03-materials

pushd ../$dir
git filter-repo --force --to-subdirectory-filter $dir
popd
read foo
git remote add $dir ../$dir \
&& git fetch $dir --tags \
&& git merge --allow-unrelated-histories $dir/main
git remote remove $dir
