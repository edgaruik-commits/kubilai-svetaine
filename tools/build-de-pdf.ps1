<#
  Forest Kings: builds the German legal PDFs in /de/ from tools/de/legal/<name>.html (layout: tools/de/legal/legal.css).
  Uses Google Chrome or Microsoft Edge without a window ("headless") to print each page to PDF.
  Run after editing a German legal text:
    powershell -ExecutionPolicy Bypass -File tools\build-de-pdf.ps1
  Comments in the HTML (<!-- PRÜFEN ... -->) are notes for the lawyer and never appear in the PDF.
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$browser = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Google Chrome or Microsoft Edge is needed to build the PDFs.' }
$profile = Join-Path ([IO.Path]::GetTempPath()) 'fk-pdf-profile'   # separate profile: does not touch your own browser
Get-ChildItem (Join-Path $root 'tools\de\legal\*.html') | ForEach-Object {
  $out = Join-Path $root ('de\' + $_.BaseName + '.pdf')
  if (Test-Path $out) { Remove-Item $out }
  $url = ([Uri]$_.FullName).AbsoluteUri
  $p = Start-Process -FilePath $browser -Wait -PassThru -WindowStyle Hidden -ArgumentList @(
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-pdf-header-footer', '--hide-scrollbars',
    "--user-data-dir=`"$profile`"", "--print-to-pdf=`"$out`"", $url)
  if (-not (Test-Path $out)) { throw "$($_.Name): no PDF was written (exit code $($p.ExitCode))" }
  Write-Host ("de/{0}.pdf  {1:N0} KB" -f $_.BaseName, ((Get-Item $out).Length / 1KB))
}
