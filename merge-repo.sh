
for num in $(seq 0 0); do
    dir=class2${num}-materials
    echo $dir

    pushd ../$dir

    git status
    ### CAUTION this destructively rewrites git history of target repo
    # git filter-repo --force --to-subdirectory-filter $dir

    popd

    # git remote add $dir ../$dir \
    # && git fetch $dir --tags \
    # && git merge -m "merge $dir" --allow-unrelated-histories $dir/main
    # git remote remove $dir

done
