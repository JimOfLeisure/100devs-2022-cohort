#!/bin/sh

# Kinda hacky script to combine individual class repos into one big one
# Requires https://github.com/newren/git-filter-repo in path
# Don't really expect to need it again, so not making it more robust
# Start from this repo, give num a sequence of single-digit numbers
#  and adjust the dir= as needed

for num in $(seq 0 0); do
    dir=class2${num}-materials
    echo $dir

    pushd ../$dir

    git status
    # # Move original repo into subdirectory to prep for merging to this one
    ### CAUTION this destructively rewrites git history of target repo
    # git filter-repo --force --to-subdirectory-filter $dir

    popd

    # # Add repo as remote and merge
    # git remote add $dir ../$dir \
    # && git fetch $dir --tags \
    # && git merge -m "merge $dir" --allow-unrelated-histories $dir/main
    # git remote remove $dir

done
