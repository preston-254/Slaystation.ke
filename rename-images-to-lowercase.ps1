# Rename all image/video files under images/ to lowercase (no spaces, safe for URLs).
# Run from repo root: .\deploy\rename-images-to-lowercase.ps1
$imagesPath = Join-Path $PSScriptRoot "images"
if (-not (Test-Path $imagesPath)) { Write-Host "images folder not found"; exit 1 }
Get-ChildItem -Path $imagesPath -Recurse -File | Where-Object { $_.Name -cne $_.Name.ToLowerInvariant() } | ForEach-Object {
    $newName = $_.Name.ToLowerInvariant()
    Rename-Item -LiteralPath $_.FullName -NewName $newName -Force
    Write-Host "Renamed: $($_.Name) -> $newName"
}
Write-Host "Done."
