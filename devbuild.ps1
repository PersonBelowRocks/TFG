param (
    [String]$InstancePath = $env:PRISM_INSTANCE_PATH,
    [switch]$NoFetch = $false
)

# path to instance must be set
if ($null -eq $InstancePath -or $InstancePath.Length -le 0) {
    Write-Error "Environment variable 'PRISM_INSTANCE_PATH' must be set or the '-InstancePath' parameter must be provided!"
    exit 1
}

# replace the directory in the instance folder with the given name.
# will copy the directory from the working directory into the instance folder.
function ReplaceDirectory {
    param (
        [string]$name
    )
    
    Remove-Item "${InstancePath}/$name" -Force -Recurse
    Copy-Item "./$name" "${InstancePath}/" -Force -Recurse
}

Write-Output "Building dev instance..."

# dont fetch mods if we're running with the NoFetch flag
if (!$NoFetch) {
    Write-Output "Fetching with pakku..."
    Invoke-Command -ScriptBlock {pakku fetch}
}

Write-Output "Copying mods..."

ReplaceDirectory("mods")

Write-Output "Copying KubeJS folder..."

ReplaceDirectory("kubejs")

Write-Output "Copying configs..."

ReplaceDirectory("config")
ReplaceDirectory("defaultconfigs")

foreach ($savefile in Get-ChildItem "${InstancePath}/saves") {
    foreach ($cfgFile in (Get-ChildItem "./defaultconfigs").FullName) {
        Copy-Item "$cfgFile" "${savefile.FullName}/serverconfig/" -Force -Recurse
    }
}

Write-Output "Finished building dev instance :3"
