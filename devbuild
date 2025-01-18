#!/usr/bin/env fish

set PRISM_INSTANCE_PATH "/home/person/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/instances/TFG custom/minecraft"

echo "building dev instance..."

echo "fetching with pakku..."
pakku fetch

echo "copying mods..."

# replace all mods
rm -rf $PRISM_INSTANCE_PATH/mods/*
cp -r ./mods/* $PRISM_INSTANCE_PATH/mods/

echo "copying kubejs folder..."

rm -rf $PRISM_INSTANCE_PATH/kubejs
cp -r ./kubejs $PRISM_INSTANCE_PATH/

echo "copying configs..."

# replace all configs
# we dont have to remove all ones since if theres no mod to use them they'll go untouched.
cp -r ./config/* $PRISM_INSTANCE_PATH/config/

echo "copying default configs..."

# replace all defaultconfigs
cp -r ./defaultconfigs/* $PRISM_INSTANCE_PATH/defaultconfigs/

for savefile in $PRISM_INSTANCE_PATH/saves/*
    echo "copying default configs into world '$savefile'"

    # as with the regular config files, its not necessary to remove the old files here.
    cp -r ./defaultconfigs/* $savefile/serverconfig
end

echo "finished building dev instance :3"