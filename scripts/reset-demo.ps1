# reset-demo.ps1
# Vuelve el proyecto al estado base para ensayar la demo desde cero.
# Uso: .\scripts\reset-demo.ps1
# GitHub Day Lima 2026 — Jose Hurtado Rivas

Write-Host "`n Reseteando demo al estado base...`n" -ForegroundColor Cyan

# 1. Ir a main y traer lo ultimo
git checkout main
git pull origin main

# 2. Borrar ramas feature/* que hayan quedado del ensayo anterior
$branches = git branch | Where-Object { $_ -match "feature/" } | ForEach-Object { $_.Trim() }
foreach ($branch in $branches) {
    git branch -D $branch
    Write-Host "  Rama eliminada: $branch" -ForegroundColor Yellow
}

# 3. Restaurar event.json al estado inicial (pending)
$eventJson = @"
{
  "event": "GitHub Day Lima 2026",
  "speaker": "Por confirmar",
  "speakerStatus": "pending",
  "topic": "GitOps: El Superpoder del Pull Request para automatizar tus despliegues",
  "schedule": "10:00 AM",
  "location": "Lima, Peru"
}
"@
$eventJson | Set-Content -Path "src\assets\config\event.json" -Encoding UTF8

# 4. Commit y push del reset
git add src/assets/config/event.json
git commit -m "chore(demo): reset to base state [skip ci]"
git push origin main

Write-Host "`n Listo. El proyecto esta en estado base." -ForegroundColor Green
Write-Host " speaker:       'Por confirmar'" -ForegroundColor Gray
Write-Host " speakerStatus: 'pending'`n" -ForegroundColor Gray
