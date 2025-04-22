param (
    [String]$SshHostPath,
    [String]$Version,
    [String]$SshConfig = "$HOME\.ssh\config"
)

Invoke-Command -ScriptBlock {pakku fetch}
Invoke-Command -ScriptBlock {pakku export}

Invoke-Command -ScriptBlock {
    scp -F $SshConfig ".\build\serverpack\TerraFirmaGreg-Modern-CUSTOMIZED-$Version.zip" $SshHostPath
}