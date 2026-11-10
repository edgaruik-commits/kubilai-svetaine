<#
  Forest Kings: builds the German pages in /de/ from the English pages.
  The English page stays the only source of layout, CSS and scripts; tools/de/<page>.txt holds only the texts:
    EN: <exact English text as it is in the English page>
    DE: <German text>
  Blank lines and lines starting with # are ignored. Pairs are applied in file order (put longer texts first
  when a shorter one is part of them). Every EN text must still exist in the English page, otherwise nothing
  is written and the script names the missing text: after changing a text in the English page, change it here too.
  Relative links (href / src, 'assets/...' in scripts) get "../" so they work from /de/.
  Run after every change to an English page or to a tools/de/*.txt file:
    powershell -ExecutionPolicy Bypass -File tools\build-de.ps1
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
# English page -> German page (pairs file: tools/de/<German page>.txt)
$pages = @(
  @{ src = 'index.html'; dst = 'de/index.html'; pairs = 'tools/de/index.txt' }
)
$failed = $false
foreach ($pg in $pages) {
  $html = [IO.File]::ReadAllText((Join-Path $root $pg.src), $utf8)
  $lines = [IO.File]::ReadAllLines((Join-Path $root $pg.pairs), $utf8)
  $en = $null; $n = 0; $missing = @()
  for ($i = 0; $i -lt $lines.Length; $i++) {
    $l = $lines[$i]
    if ($l -match '^\s*(#|$)') { continue }
    if ($l.StartsWith('EN: ')) { if ($en -ne $null) { throw "$($pg.pairs) line $($i+1): EN without DE before it" }; $en = $l.Substring(4); continue }
    if ($l.StartsWith('DE: ')) {
      if ($en -eq $null) { throw "$($pg.pairs) line $($i+1): DE without EN" }
      if ($html.IndexOf($en, [StringComparison]::Ordinal) -lt 0) { $missing += "  line $($i+1): $en" }
      else { $html = $html.Replace($en, $l.Substring(4)); $n++ }
      $en = $null; continue
    }
    throw "$($pg.pairs) line $($i+1): line must start with 'EN: ', 'DE: ' or '#'"
  }
  if ($missing.Count) {
    Write-Host "$($pg.src): these English texts were not found (changed in the English page?), $($pg.dst) NOT written:" -ForegroundColor Red
    $missing | ForEach-Object { Write-Host $_ }
    $failed = $true; continue
  }
  # relative links -> one folder up
  $html = [regex]::Replace($html, '(\s(?:href|src))="(?!https?:|#|data:|mailto:|tel:|/|\.\./)([^"]*)"', '$1="../$2"')
  $html = [regex]::Replace($html, "(['""])assets/", '$1../assets/')
  $html = $html -replace '^<!DOCTYPE html>', "<!DOCTYPE html><!-- Generated from $($pg.src) by tools/build-de.ps1 - edit $($pg.src) or $($pg.pairs), not this file -->"
  $out = Join-Path $root $pg.dst
  [IO.Directory]::CreateDirectory((Split-Path -Parent $out)) | Out-Null
  [IO.File]::WriteAllText($out, $html, $utf8)
  Write-Host "$($pg.dst): $n texts translated"
}
if ($failed) { exit 1 }
