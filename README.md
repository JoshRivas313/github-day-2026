# 🚀 GitHub Day Lima 2026 — GitOps Demo

> **"Tu única acción es el Pull Request. Git y GitHub hacen el resto."**
>
> José Hurtado Rivas · [@josehurtadorivas](https://github.com/josehurtadorivas)
> GitHub Day Lima 2026 · GitOps: El Superpoder del Pull Request

---

## ¿Qué es este proyecto?

Aplicación Angular que demuestra un flujo **GitOps completo** en vivo:
un único archivo JSON (`event.json`) como fuente de verdad,
tres workflows de GitHub Actions, y un deploy automático a GitHub Pages en 60 segundos.

```
Editas event.json → commit → PR → CI valida → merge → deploy automático ✅
```

---

## Estructura del proyecto

```
github-day-2026/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Valida build + event.json en cada PR
│       ├── deploy.yml      # Deploy automático a GitHub Pages en merge a main
│       └── schedule.yml    # Cron diario: genera docs/status.json
├── scripts/
│   └── validate-event.js   # Validador de campos requeridos en event.json
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   ├── assets/
│   │   └── config/
│   │       └── event.json  ← LA FUENTE DE VERDAD
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## Setup inicial

### 1. Clonar y instalar

```bash
git clone https://github.com/TU_USUARIO/github-day-2026.git
cd github-day-2026
npm install
```

### 2. Correr en local

```bash
npm start
# → http://localhost:4200
```

### 3. Configurar GitHub Pages

En tu repositorio de GitHub:
1. **Settings → Pages → Source:** `GitHub Actions`
2. **Settings → Branches → Add rule para `main`:**
   - ✅ Require pull request before merging
   - ✅ Require status checks to pass → selecciona `CI — Build & Validate`
   - ✅ Require at least 1 approval
   - ✅ Block force pushes

4. En `deploy.yml`, reemplaza `github-day-2026` en `--base-href` con el nombre real de tu repositorio.

---

## Demo en vivo — Script paso a paso

> Duración: ~8 minutos · 9 pasos

### Preparación previa

```bash
# Verificar que main está limpio
git status
git checkout main
git pull origin main
```

Abrir en el navegador:
- Pestaña 1: Repositorio en GitHub
- Pestaña 2: GitHub Actions
- Pestaña 3: GitHub Pages (URL del sitio)

---

### PASO 1 — Crear la rama

```bash
git checkout -b feature/update-speaker
```

> *"Nunca trabajo directamente en main. Esa es la regla número uno del flujo GitOps."*

---

### PASO 2 — Mostrar el estado actual

Abrir la pestaña de GitHub Pages. Señalar el campo `speaker`.

---

### PASO 3 — Editar event.json

Abrir `src/assets/config/event.json` y cambiar el campo `speaker`:

```json
{
  "event": "GitHub Day Lima 2026",
  "speaker": "José Hurtado Rivas ⭐",
  "topic": "GitOps: El Superpoder del Pull Request",
  "schedule": "10:00 AM",
  "location": "Lima, Perú"
}
```

---

### PASO 4 — Ver el diff

```bash
git diff src/assets/config/event.json
```

> *"La línea en rojo es lo que estaba. La línea en verde es lo que va a quedar."*

---

### PASO 5 — Commit

```bash
git add src/assets/config/event.json
git commit -m "feat(event): update speaker name"
```

---

### PASO 6 — Push

```bash
git push origin feature/update-speaker
```

---

### PASO 7 — Crear el Pull Request

En GitHub: clic en el banner amarillo → `Compare & pull request`

- **Título:** `feat(event): update speaker name`
- **Descripción:** `Actualiza el nombre del speaker en event.json. Demuestra el flujo GitOps completo.`
- **Label:** `gitops-demo`

Clic en **Create pull request**.

---

### PASO 8 — Observar el CI en tiempo real

El `ci.yml` se dispara automáticamente. Observar en la sección de checks del PR:
- `npm ci` → instalando dependencias
- `ng build --configuration production` → build de Angular
- `node scripts/validate-event.js` → validando campos de event.json
- Comentario automático con el resultado

> *"El CI se disparó solo. Nadie lo llamó. El simple hecho de abrir el PR activó el workflow."*

---

### PASO 9 — Aprobar y mergear

1. **Add your review → Approve** → `"LGTM! GitOps en acción 🚀"` → Submit
2. **Merge pull request → Confirm merge**
3. Marcar **Delete branch after merge**

Cambiar a la pestaña de **Actions** y ver el `deploy.yml` corriendo.

> *"Nadie ejecutó un comando de deploy. El merge al repositorio fue la instrucción."*

Cuando termina: abrir GitHub Pages → el speaker cambió en producción.

---

## Rollback

Si algo sale mal en producción:

```bash
# Ver el historial
git log --oneline -3

# Revertir el commit problemático (reemplaza abc1234 con el SHA real)
git revert abc1234 --no-edit

# Push → dispara deploy.yml automáticamente
git push origin main
```

> *"El rollback no tiene modo pánico. Solo tiene git revert. 60 segundos. Producción restaurada."*

---

## Los 3 workflows

| Workflow | Trigger | Qué hace |
|----------|---------|----------|
| `ci.yml` | PR hacia `main` | Instala deps, build, valida JSON, comenta en PR |
| `deploy.yml` | Push a `main` (merge) | Build prod, sube a GitHub Pages, genera summary |
| `schedule.yml` | Cron diario 08:00 UTC | Lee event.json, genera `docs/status.json`, commit automático |

---

## Frases clave

- *"Tu única acción es el Pull Request. Git y GitHub hacen el resto."*
- *"Si no está en Git, no existe."*
- *"Merge a main equivale a deploy en producción. Siempre."*
- *"El rollback no tiene modo pánico. Solo tiene git revert."*
- *"Si sabes hacer un commit, estás listo para GitOps."*
- *"60 segundos. Cero SSH. Cero servidores."*

---

## Stack

- **Framework:** Angular 17
- **Estilos:** Tailwind CSS 3
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages
- **Fuente de verdad:** `src/assets/config/event.json`

---

*GitHub Day Lima 2026 · José Hurtado Rivas · [@josehurtadorivas](https://github.com/josehurtadorivas)*
*#GitHubDayLima · #GitOps*
