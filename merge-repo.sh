
for num in $(seq 4 8); do
dir=class0${num}-materials
echo $dir
pushd ../$dir
git status
# git filter-repo --force --to-subdirectory-filter $dir
popd

# git remote add $dir ../$dir \
# && git fetch $dir --tags \
# && git merge --allow-unrelated-histories $dir/main
# git remote remove $dir

done
