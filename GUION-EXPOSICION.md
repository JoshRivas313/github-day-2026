# 🎤 GUIÓN COMPLETO — GitHub Day Lima 2026
## GitOps: El Superpoder del Pull Request para automatizar tus despliegues
### José Hurtado Rivas · Duración: 40 minutos

---

> **CÓMO LEER ESTE GUIÓN**
> - 🗣️ **DICES** → lo que dices en voz alta
> - 🖥️ **HACES** → acción en pantalla o terminal
> - ⏸️ **PAUSA** → respira, deja que la audiencia reaccione
> - ⏱️ **TIEMPO** → minutos acumulados

---

# SLIDE 01 — PORTADA

⏱️ [0:00]

🖥️ **HACES:** Portada en pantalla. 3 segundos de silencio.

🗣️ **DICES:**
"Buenos días a todos. ¿Cómo están?

Antes de presentarme, una pregunta rápida.

¿Cuántos de ustedes han hecho un deploy manual esta semana?
SSH al servidor, editar un archivo directamente en producción,
copiar archivos por FTP, o simplemente rezar para que no falle nada."

⏸️ **PAUSA** — deja que algunos levanten la mano

"Tranquilos, no los voy a juzgar. Yo también lo hice.
Hoy les voy a mostrar que eso tiene solución.
Y la solución... es este botón verde."

🖥️ **HACES:** Señalas el botón "Merge pull request" en la portada.

"Ese es su único trabajo. Presionar ese botón.
Git y GitHub hacen el resto.
Bienvenidos a GitOps."

⏸️ **PAUSA** — 2 segundos

---

# SLIDE 02 — NEGRO SEPARADOR

🖥️ **HACES:** Avanzas en silencio.

---

# SLIDE 03 — ¿QUIÉN SOY?

⏱️ [1:05]

🗣️ **DICES:**
"Mi nombre es José Hurtado Rivas.
Soy desarrollador frontend, entusiasta de DevOps,
y pueden encontrar todo mi trabajo en github.com/josehurtadorivas.

He roto producción suficientes veces
para saber que el rollback debe ser un comando,
no una reunión de emergencia."

⏸️ **PAUSA** — sonrisas

"Y esa experiencia es exactamente lo que me trajo a hablarles hoy.
Todo lo que van a ver viene de haber aprendido de esos errores."

---

# SLIDE 04 — ROADMAP

⏱️ [2:30]

🗣️ **DICES:**
"En estos 40 minutos recorremos 9 bloques.

Empezamos con DevOps vs GitOps — el contexto sin el cual lo demás no tiene sentido.
Luego Git a fondo, el Pull Request como pieza central,
GitHub Actions con ejemplos reales, Copilot integrado en el flujo,
el proyecto demo, la demo en vivo, el rollback, y las conclusiones.

La estrella es la demo en vivo."

🖥️ **HACES:** Señalas "Demo en vivo" en el roadmap.

"Todo lo anterior existe para que ese momento tenga sentido completo."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE A — DEVOPS VS GITOPS
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 05 — El loop DevOps

⏱️ [3:30]

🗣️ **DICES:**
"Primero necesitamos hablar de DevOps.
No porque sea nuevo para ustedes,
sino porque GitOps viene de ahí y necesitamos entender la relación.

DevOps es la cultura que une a desarrollo y operaciones
con un objetivo claro: entregar software más rápido y con más calidad.

El famoso loop infinito: planeas, codeas, construyes, testeas,
haces el release, despiegas, operas, monitoras... y vuelves a empezar.
Un ciclo continuo. Siempre en movimiento."

---

# SLIDE 06 — GitOps agrega Git al centro

⏱️ [4:30]

🗣️ **DICES:**
"GitOps toma ese loop y hace algo muy concreto:
pone a Git en el centro como operador del sistema.

Ya no eres tú quien ejecuta los cambios manualmente. Es Git.

Cualquier cambio al sistema, sin excepción,
pasa por un commit, por un Pull Request, por un merge.
Git se convierte en la única fuente de verdad."

⏸️ **PAUSA**

"Si algo está en Git, existe en el sistema.
Si no está en Git, no existe."

⏸️ **PAUSA** — deja que eso aterrice

"GitOps no reemplaza a DevOps.
Es DevOps con Git como único punto de control."

---

# SLIDE 07 — Tabla comparativa

⏱️ [6:00]

🗣️ **DICES:**
"Miren esta tabla. Vean la diferencia fila por fila.

En DevOps tradicional, el operador es un humano.
En GitOps, el operador es Git.

Los cambios en DevOps van por scripts de CI/CD configurados manualmente.
En GitOps, todo cambio pasa por un Pull Request. Siempre.

La auditoría en DevOps vive en logs externos.
En GitOps, la auditoría es el git log.
Quién cambió qué, cuándo, y por qué — todo en el mismo lugar.

Pero la fila más importante es esta."

🖥️ **HACES:** Señalas la fila "Rollback".

"En DevOps el rollback es manual, a veces un script, a veces imposible.
En GitOps, el rollback es un git revert.
Un comando. Un push. 60 segundos.
Lo van a ver en vivo al final."

---

# SLIDE 08 — NEGRO SEPARADOR

🖥️ **HACES:** Avanzas en silencio.

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE B — GIT
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 09 — Comandos que ya usas

⏱️ [7:35]

🗣️ **DICES:**
"Ahora Git. Todos lo usamos, pero pocos lo usamos al máximo.

Estos seis los domina todo el mundo en esta sala:
add, commit, push, pull, merge, status.

Son el vocabulario básico. El pan de cada día.
Pero Git tiene mucho más debajo del capó."

---

# SLIDE 10 — Comandos que deberías usar

⏱️ [8:35]

🗣️ **DICES:**
"Cuatro comandos que deberían usar regularmente.

git stash — guarda cambios temporalmente sin hacer commit.
¿Necesitas cambiar de rama urgente sin perder tu trabajo?
git stash. Luego git stash pop para recuperarlos.

git cherry-pick — trae UN commit específico de otra rama.
Tu compañero hizo un fix crítico en su feature branch y lo necesitas ahora. Cherry-pick.

git rebase -i HEAD~3 — limpia los últimos 3 commits antes de abrir un PR.
Mensajes claros, historial ordenado, PR más fácil de revisar.

git reflog — su red de seguridad total.
Registra todo lo que pasó en el repo local.
Hicieron un reset y borraron commits sin querer. git reflog los lista.
git checkout al SHA. Problema resuelto."

---

# SLIDE 12 — git revert: el más importante para GitOps

⏱️ [12:05]

🗣️ **DICES:**
"Y el más importante para lo que vamos a ver hoy: git revert.

No git reset. git revert.

La diferencia es crítica:
git reset borra commits del historial.
git revert crea un commit nuevo que deshace los cambios.

En GitOps usamos revert porque mantiene el historial intacto,
es trazable, auditable, y sigue exactamente el mismo flujo
que cualquier otro cambio: PR, revisión, merge, deploy.

Un comando. Un push. 60 segundos. Producción restaurada."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE C — PULL REQUEST
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 13 — Anatomía del PR perfecto

⏱️ [13:05]

🗣️ **DICES:**
"El Pull Request no es un trámite burocrático.
Es la puerta de producción.

Un PR bien hecho tiene estas partes:

Título siguiendo Conventional Commits:
feat, fix, chore, scope, descripción.
feat(event): confirm speaker.
No 'cambios varios'. No 'arreglos'.

Descripción: qué cambió y por qué.
No para el reviewer de hoy,
sino para el José del futuro que mire el historial.

Labels para categorizar.
Reviewer asignado, al menos uno.
Y los checks de CI corriendo automáticamente
en el momento en que haces push."

---

# SLIDE 14 — El PR dispara todo el pipeline

⏱️ [14:05]

🗣️ **DICES:**
"Cuando abren un PR hacia main,
GitHub Actions se activa automáticamente.
Nadie lo inició manualmente. Git lo disparó.

El workflow de CI hace exactamente esto:
instala dependencias con npm ci,
construye la aplicación Angular en modo producción,
valida que el event.json tenga todos los campos requeridos,
y al terminar deja un comentario automático en el PR
con el resultado: verde o rojo.

Si algo falla, el botón de merge se bloquea.
Sin checks verdes, no hay merge.
Sin merge, no hay deploy.
El sistema los protege automáticamente."

---

# SLIDE 15 — Branch Protection Rules

⏱️ [15:35]

🗣️ **DICES:**
"Esto se refuerza con las Branch Protection Rules.
Settings → Branches → Add rule para main.

Seis reglas activas en el proyecto demo:

Require pull request before merging.
Nadie puede hacer push directo a main.

Require status checks to pass.
El CI tiene que estar verde.

Require at least one approval.
Al menos un reviewer aprueba.

Dismiss stale reviews on new push.
Si haces un nuevo commit después de la aprobación,
la aprobación se cancela. Evita el truco de aprobar y después cambiar.

Block force pushes.
Nadie puede sobreescribir el historial de main.

Block direct pushes.
Nadie. Ni el owner del repositorio.
Todo pasa por un PR. Sin excepciones."

---

# SLIDE 16 — NEGRO SEPARADOR

🖥️ **HACES:** Avanzas en silencio.

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE D — GITHUB ACTIONS
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 17 — ¿Qué es GitHub Actions?

⏱️ [16:40]

🗣️ **DICES:**
"GitHub Actions es el motor de automatización integrado en GitHub.
No es una herramienta externa que tienes que conectar.
Vive dentro del repositorio. Forma parte de él.

La idea central es simple:
algo ocurre en el repositorio — un push, un PR, una hora del día —
y GitHub reacciona ejecutando código automáticamente.

Todo se define en archivos YAML dentro de la carpeta .github/workflows.
Si el archivo está en el repositorio, el workflow existe.
Si no está, no existe.
Git como fuente de verdad también para la automatización."

🖥️ **HACES:** Señalas la estructura del archivo en pantalla.

"Un archivo de workflow tiene cuatro partes que necesitan conocer.

name — el nombre que aparece en la pestaña de Actions de GitHub.

on — el trigger. Qué evento dispara el workflow.
Puede ser push, pull_request, schedule, o workflow_dispatch — disparo manual.

jobs — los bloques de trabajo.
Cada job corre en su propia máquina virtual, en paralelo con otros jobs
a menos que uses needs para encadenarlos.

steps — los pasos dentro de cada job.
Se ejecutan en secuencia, uno detrás del otro, en la misma máquina."

---

# SLIDE 18 — Runners: la máquina que ejecuta tu código

⏱️ [18:00]

🗣️ **DICES:**
"Una de las partes más importantes y que menos se explica: el runner.

Cuando GitHub Actions corre un workflow,
levanta una máquina virtual limpia, efímera, que no existía antes.

ubuntu-latest — Ubuntu con Node, Python, Git y Docker preinstalados.
Es la que usamos en este proyecto.

Cada ejecución es una máquina nueva.
No quedan residuos del run anterior.
No hay estado compartido entre ejecuciones.
Cada vez que alguien abre un PR, GitHub levanta una máquina limpia,
corre los steps, y la destruye.

Esto es lo que hace que CI sea reproducible.
Si pasa en la máquina de Actions, pasa en producción.
Si falla, el error es real — no 'es que en mi máquina funciona'."

⏸️ **PAUSA**

"Y es gratis para repositorios públicos.
Para privados tienen 2,000 minutos mensuales en el plan gratuito."

---

# SLIDE 19 — Anatomy live: el ci.yml línea por línea

⏱️ [19:30]

🖥️ **HACES:** Muestras el archivo `.github/workflows/ci.yml` del proyecto.

🗣️ **DICES:**
"Este es el ci.yml real del proyecto. Lo recorremos juntos.

```yaml
name: CI — Build & Validate
```
Este nombre es lo que va a aparecer en el PR como check.
Si el check falla, el botón de merge se bloquea con este nombre.

```yaml
on:
  pull_request:
    branches:
      - main
```
El trigger. Solo se activa cuando alguien abre o actualiza
un Pull Request hacia la rama main.
No en push directo. No en otras ramas. Solo PRs a main.

```yaml
permissions:
  contents: read
  pull-requests: write
```
Principio de mínimo privilegio.
Le decimos a Actions exactamente qué puede hacer y nada más.
pull-requests: write lo necesita para dejar el comentario automático en el PR.

```yaml
runs-on: ubuntu-latest
```
Aquí le decimos a GitHub: dame una máquina Ubuntu limpia.
Cada vez que corra este workflow, máquina nueva.

Ahora los steps:"

🖥️ **HACES:** Desplazas el archivo mostrando cada step.

"Step 1: actions/checkout@v4
Esto es una Action — una unidad de código reutilizable publicada en el Marketplace.
checkout trae el código del repositorio a la máquina virtual.
Sin este step, la máquina no tiene tu código.

Step 2: actions/setup-node@v4 con cache: 'npm'
Instala Node.js versión 20 y activa el cache de npm.
La primera vez tarda. Las siguientes son instantáneas.
Ahí está el secreto de los 15 segundos en el contador.

Step 3: npm ci
No es npm install. Es npm ci.
La diferencia: npm ci usa el lockfile exacto, no lo modifica,
y borra node_modules antes de instalar.
Reproducible. Siempre el mismo resultado.

Step 4: npm run build:prod
Construye Angular en modo producción.
Si hay un error de TypeScript, aquí falla. El PR se bloquea.

Step 5: node scripts/validate-event.js
Nuestro validador personalizado.
Verifica que event.json tenga todos los campos
y que speakerStatus sea exactamente 'pending' o 'confirmed'.
No 'Confirmed', no 'PENDING'. Exactamente esos valores.
Si el JSON tiene un typo, aquí falla.

Step 6: actions/github-script
Si: always() — este step corre siempre, aunque algo anterior haya fallado.
Lee el estado del job y deja un comentario en el PR:
tabla con cada check, verde o rojo, con el SHA del commit.
El reviewer lo ve en el PR sin ir a la pestaña de Actions."

---

# SLIDE 20 — El deploy.yml línea por línea

⏱️ [22:00]

🖥️ **HACES:** Abres `.github/workflows/deploy.yml`.

🗣️ **DICES:**
"El deploy.yml. Este es el que hace la magia real.

```yaml
on:
  push:
    branches:
      - main
```
Trigger: push a main.
¿Cuándo ocurre un push a main con Branch Protection activado?
Solo cuando alguien hace merge de un PR.
Entonces: merge = push a main = deploy automático.
Sin excepción. Sin pasos manuales.

```yaml
permissions:
  pages: write
  id-token: write
```
Permisos específicos para GitHub Pages.
id-token: write es el mecanismo de autenticación moderna —
no necesitan configurar ningún secret manual para desplegar a Pages.
GitHub lo maneja internamente.

```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```
Solo puede haber un deploy activo a la vez.
Si alguien hace merge mientras hay un deploy corriendo,
el deploy anterior se cancela y arranca el nuevo.
Sin deploys duplicados, sin condiciones de carrera.

Luego tiene dos jobs encadenados con needs.

Job 1 — build:
Checkout, Node, npm ci, ng build con --base-href,
y upload del artefacto a Pages.

El --base-href es crítico.
Sin él, Angular busca los archivos JS y CSS en la raíz del dominio
y no los encuentra porque GitHub Pages los sirve bajo el nombre del repo.
Primer error que tuve. Copilot lo detectó."

⏸️ **PAUSA**

"Job 2 — deploy:
```yaml
needs: build
```
No corre si build falló. Punto.
usa actions/deploy-pages — la action oficial de GitHub.
Sube el artefacto y lo publica.

Y al final, el summary:
URL del sitio, quién hizo el push, hash del commit, timestamp.
Cada deploy queda documentado automáticamente."

---

# SLIDE 21 — El schedule.yml: GitOps sin humanos

⏱️ [24:00]

🖥️ **HACES:** Abres `.github/workflows/schedule.yml`.

🗣️ **DICES:**
"El tercero. Y el que más impresiona cuando lo muestro.

```yaml
on:
  schedule:
    - cron: '0 8 * * *'
  workflow_dispatch:
```
Dos triggers.
El cron: todos los días a las 8 AM UTC — 3 AM hora de Lima.
workflow_dispatch: permite ejecutarlo manualmente desde la UI de Actions.
Útil para pruebas.

Lo que hace este workflow cada mañana:

Lee el event.json actual del repositorio.
Genera un archivo docs/status.json con esa información
más un timestamp de cuándo se generó.
Configura git con el usuario github-actions[bot].
Verifica si hubo cambios reales.
Si los hubo, hace commit con el mensaje:
chore(status): daily snapshot 2026-06-03 [skip ci]

El [skip ci] en el mensaje es importante.
Le dice a GitHub que no dispare el workflow de CI ni el de deploy.
Sin eso entraríamos en un loop infinito:
el schedule hace commit → dispara deploy → deploy hace commit → dispara deploy...

Y hace push a main directamente.
Sí, directamente a main — pero este es un job automatizado,
no un humano. Las Branch Protection Rules permiten excepciones
para el token de Actions con los permisos correctos."

⏸️ **PAUSA**

"El resultado: todos los días a las 3 AM
hay un snapshot del estado del sistema en Git.
Sin que nadie lo pidió. Sin que nadie lo configuró manualmente.
Git como operador que trabaja 24 horas sin descanso.

Eso es GitOps en su forma más pura."

---

# SLIDE 22 — Secrets, variables y contextos

⏱️ [25:30]

🗣️ **DICES:**
"Antes de pasar a Copilot, tres conceptos rápidos que van a necesitar.

Los contextos.
GitHub inyecta información automáticamente en cada ejecución.
github.actor — quién hizo el push o abrió el PR.
github.sha — el hash exacto del commit que disparó el workflow.
github.ref — la rama. refs/heads/main, refs/heads/feature/confirm-speaker.
github.event_name — push, pull_request, schedule.

Con esto el workflow sabe exactamente qué está pasando
sin que ustedes configuren nada.

Los secrets.
secrets.GITHUB_TOKEN es automático — GitHub lo crea por cada ejecución.
Para sus propias claves sensibles: Settings → Secrets → New repository secret.
Luego en el YAML: ${{ secrets.MI_API_KEY }}.
Nunca en el código. Nunca en el YAML en texto plano. Siempre en secrets.

Y los condicionales.
if: failure() — corre solo si algo falló. Para notificaciones de error.
if: github.ref == 'refs/heads/main' — solo en main.
if: contains(github.event.commits[0].modified, 'event.json') — 
solo si este commit modificó el event.json.
Si solo cambió un archivo de estilos, el deploy no corre.
Los workflows no son robots que ejecutan todo ciegamente.
Pueden tomar decisiones."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE E — GITHUB COPILOT
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 23 — Copilot en el editor

⏱️ [24:10]

🗣️ **DICES:**
"GitHub Copilot entra en el flujo desde que abren el editor.

Le escribí este comentario:
'Create a GitHub Actions workflow that builds Angular
and deploys to GitHub Pages on push to main.'

Y Copilot sugirió el workflow completo.
Triggers, jobs, steps, actions, permisos. Todo.

No lo acepté ciegamente.
Lo revisé, lo ajusté, lo mejoré.
Pero en lugar de empezar desde cero con un YAML vacío,
empecé desde el 80%.

Copilot no reemplaza el conocimiento. Lo acelera."

---

# SLIDE 24 — Copilot en cada etapa

⏱️ [25:10]

🗣️ **DICES:**
"Copilot no solo vive en el editor.
Está en cada etapa del flujo GitOps.

En el editor completa componentes Angular con contexto del proyecto.
No sugerencias genéricas — sugerencias que conocen su código.

En el Pull Request revisa el diff y sugiere mejoras en los comentarios.

Cuando el CI falla, Copilot Chat explica el error en lenguaje natural.
No el stack trace crudo. Una explicación de qué falló y cómo resolverlo.

Y para workflows nuevos genera el YAML desde un comentario."

---

# SLIDE 25 — Los 3 roles en este proyecto

⏱️ [26:10]

🗣️ **DICES:**
"En este proyecto, Copilot tuvo tres roles concretos.

Como generador:
Le pedí que validara los campos requeridos de event.json,
incluyendo que speakerStatus solo acepte 'pending' o 'confirmed'.
Generó el step completo.

Como revisor:
Cuando abrí el PR del rollback,
sugirió agregar --no-edit al git revert
para que el workflow no se detenga esperando un mensaje de commit.

Como debugger:
El primer deploy falló.
Copilot Chat me dijo: 'El problema es el --base-href apuntando al repo.'
Resuelto en 10 segundos."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE F — EL PROYECTO
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 26 — La casuística

⏱️ [27:10]

🗣️ **DICES:**
"Bien. El proyecto.

La casuística es simple y real. Lean esto:"

🖥️ **HACES:** Señalas la frase en pantalla.

"'El speaker cambió. Actualiza la web.'

Así de simple es el problema.
Alguien del equipo dice: José, el speaker no estaba confirmado,
ahora ya está confirmado, actualiza el portal.

Sin GitOps esto es lo que pasa:
SSH al servidor, editar el archivo en producción,
reinicio del proceso, le avisan al equipo que esperen,
y si algo salió mal nadie sabe exactamente qué cambió.

Con GitOps esto es lo que pasa:
Abro el event.json en mi editor local.
Cambio dos campos: speaker y speakerStatus.
commit, push, PR, CI valida, reviewer aprueba, merge.
Deploy automático. 60 segundos.
La web pasa del banner naranja 'Speaker pendiente'
al banner verde 'Speaker Confirmado'.
Y hay un registro completo de quién cambió qué y por qué."

---

# SLIDE 27 — Arquitectura

⏱️ [28:40]

🗣️ **DICES:**
"La arquitectura del proyecto es simple a propósito.
Simple no significa básica. Significa enfocada.

José edita el event.json en local.
Commit y push a una feature branch.
Pull Request en GitHub.
En paralelo: el ci.yml valida y el reviewer revisa.
Con ambos en verde: merge a main.
El deploy.yml corre automáticamente.
GitHub Pages sirve la versión actualizada.

El nodo central de todo el diagrama es este."

🖥️ **HACES:** Señalas event.json.

"Un archivo JSON en Git. Esa es la fuente de verdad.
Si quieren cambiar algo en la web, cambian ese archivo."

---

# SLIDE 28 — Los 60 segundos

⏱️ [29:40]

🗣️ **DICES:**
"Y todo esto pasa en 60 segundos desde el merge.

Segundo 0: merge completado.
Segundo 2: deploy.yml se dispara.
Segundo 15: npm ci termina con cache.
Segundo 35: ng build production listo.
Segundo 58: GitHub Pages actualizado.
Segundo 60: la web está en producción.

Cero SSH. Cero servidores. Cero FTP. Solo Git."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE G — DEMO EN VIVO
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 29 — Checklist

⏱️ [30:10]

🗣️ **DICES:**
"Bien. Ahora vamos en vivo.
9 pasos. 8 minutos. Sin tocar ningún servidor."

🖥️ **HACES:** Cambias a la terminal y el navegador.

---

## 🔴 DEMO EN VIVO — 9 PASOS

### PASO 1 — Crear la rama

🖥️ **ESCRIBES EN TERMINAL:**
```bash
git checkout -b feature/confirm-speaker
```

🗣️ **DICES:**
"Primero creo mi rama de feature.
Nunca trabajo directamente en main.
Esa es la regla número uno."

---

### PASO 2 — Mostrar el estado actual de la web

🖥️ **HACES:** Cambias a la pestaña de GitHub Pages.

🗣️ **DICES:**
"Esta es la web actualmente en producción.
Miren el banner naranja: 'Speaker pendiente de confirmación'.
El campo speaker dice 'Por confirmar'.
Vamos a cambiarlo."

---

### PASO 3 — Editar el event.json

🖥️ **HACES:** Abres `src/assets/config/event.json` en el editor.

Cambias:
```json
"speaker":       "Por confirmar"    →  "José Hurtado Rivas"
"speakerStatus": "pending"          →  "confirmed"
```

Guardas con Ctrl+S.

🗣️ **DICES:**
"Solo cambio dos campos en un JSON.
Nada más. Este archivo es la fuente de verdad del sistema."

---

### PASO 4 — Ver el diff

🖥️ **ESCRIBES:**
```bash
git diff src/assets/config/event.json
```

🗣️ **DICES:**
"La línea en rojo es lo que estaba.
La línea en verde es lo que va a quedar.
Trazabilidad completa desde el primer momento."

---

### PASO 5 — Commit

🖥️ **ESCRIBES:**
```bash
git add src/assets/config/event.json
git commit -m "feat(event): confirm speaker"
```

🗣️ **DICES:**
"Conventional Commits. feat porque es una confirmación,
scope event porque tocamos la config del evento.
Esto es lo que va a aparecer en el git log
cuando alguien revise el historial en 6 meses."

---

### PASO 6 — Push

🖥️ **ESCRIBES:**
```bash
git push origin feature/confirm-speaker
```

🗣️ **DICES:**
"Push a la feature branch.
No a main. A mi rama."

---

### PASO 7 — Crear el Pull Request

🖥️ **HACES:** Cambias al navegador. GitHub muestra el banner amarillo.
Haces clic en "Compare & pull request".
Completas:
- Título: `feat(event): confirm speaker`
- Descripción: `Confirma el speaker del evento en event.json. Demo del flujo GitOps completo.`
- Haces clic en "Create pull request"

🗣️ **DICES:**
"GitHub ya detectó que hice push y me ofrece crear el PR.
Lo completo con título y descripción siguiendo Conventional Commits.
Y miren lo que pasa inmediatamente."

---

### PASO 8 — Observar el CI

🖥️ **HACES:** En el PR, en la sección de checks, aparece "CI — Build & Validate · In progress".

🗣️ **DICES:**
"El ci.yml se disparó solo. Nadie lo llamó.
El simple hecho de abrir el PR activó el workflow.
Está instalando dependencias, construyendo Angular,
y validando que speakerStatus sea un valor permitido."

⏸️ **ESPERAS** ~60 segundos. Mientras tanto:

"Yo no hice nada más que hacer push.
GitHub Actions está trabajando solo.
Eso es exactamente el concepto de GitOps:
el operador es el sistema, no el humano."

🖥️ **HACES:** Cuando termina, señalas el check verde y el comentario automático.

"El workflow dejó un comentario automático en el PR.
npm install: verde. Build: verde. JSON válido: verde.
El PR está listo para mergear."

---

### PASO 9 — Aprobar y mergear

🖥️ **HACES:**
1. "Add your review" → Approve → `"LGTM! GitOps en acción 🚀"` → Submit
2. "Merge pull request" → "Confirm merge"
3. Cambias a la pestaña de Actions

🗣️ **DICES:**
"Apruebo y hago merge.
Ahora observen la pestaña de Actions."

🖥️ **HACES:** Ves el deploy.yml con indicador amarillo corriendo.

"El deploy.yml se disparó automáticamente con el merge.
Nadie ejecutó un comando de deploy.
Nadie se conectó a ningún servidor.
El merge al repositorio fue la instrucción."

⏸️ **ESPERAS** ~60 segundos. Cuando termina:

🖥️ **HACES:** Abres la URL de GitHub Pages desde el summary.

🗣️ **DICES:**
"Aquí está. La web está actualizada en producción."

🖥️ **HACES:** Señalas el banner verde en pantalla.

"Banner verde: '¡Speaker Confirmado!'
El nombre aparece en verde. El campo cambió.
Sin SSH. Sin FTP. Sin servidores.
Solo un Pull Request."

⏸️ **PAUSA** — deja que eso aterrice

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE H — ROLLBACK
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 31

⏱️ [38:40]

🖥️ **HACES:** Vuelves al slide 31. Luego cambias a la terminal.

🗣️ **DICES:**
"Y ahora la pregunta que siempre hacen:
¿qué pasa si algo sale mal en producción?

Sin GitOps esa pregunta genera nerviosismo.
Con GitOps genera este comando:"

🖥️ **ESCRIBES:**
```bash
git log --oneline -3
```

🗣️ **DICES:**
"Veo el historial. Copio el SHA del commit que causó el problema."

🖥️ **ESCRIBES:**
```bash
git revert <SHA> --no-edit
git push origin main
```

🗣️ **DICES:**
"git revert crea un commit nuevo que deshace exactamente esos cambios.
El --no-edit evita que se abra el editor — útil en rollbacks automatizados.
Push a main dispara el deploy.yml automáticamente.

En 60 segundos producción vuelve al banner naranja.
El speaker vuelve a 'Por confirmar'.
El rollback no tiene modo pánico.
No tiene número de emergencia. No tiene reunión de crisis.
Sigue exactamente el mismo flujo que cualquier cambio:
commit, push, deploy automático.
Predecible. Trazable. Sin drama."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# BLOQUE I — CONCLUSIONES
# ━━━━━━━━━━━━━━━━━━━━━━━

# SLIDE 32

⏱️ [40:40]

🗣️ **DICES:**
"Cinco cosas para llevarse de esta charla.

Una: DevOps más Git como fuente de verdad es igual a GitOps.
No son cosas distintas. GitOps es la evolución natural.

Dos: git bisect, git reflog, y git worktree existen.
Úsenlos. Van a ahorrar horas.

Tres: el Pull Request no es un trámite.
Es la puerta de producción. Trátenlo como tal.

Cuatro: los condicionales if en GitHub Actions
convierten un workflow básico en automatización inteligente.

Cinco: GitHub Copilot no reemplaza el flujo. Lo acelera.

Y la conclusión más importante:
si saben hacer un commit,
están listos para GitOps.
No necesitan Kubernetes. No necesitan Docker. No necesitan AWS.
Solo Git y GitHub."

---

# SLIDE 33 — #GitHubDayLima

🖥️ **HACES:** Avanzas rápido.

---

# SLIDE 34 — CIERRE

⏱️ [42:15]

🗣️ **DICES:**
"Eso es todo de mi parte.
El repositorio está aquí."

🖥️ **HACES:** Señalas el QR en pantalla.

"Tiene todo: el código Angular, los tres workflows completos,
el README con el script de demo paso a paso,
y el event.json listo para que hagan su primer PR de GitOps.

Escaneen el QR, clonen el repo,
cambien el speakerStatus a 'confirmed',
abran un PR, y vean el deploy automático con sus propios ojos.

Tu turno."

⏸️ **PAUSA** — aplauso

"Gracias. Si tienen preguntas, con gusto las respondo."

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# CONTROL DE TIEMPO
# ━━━━━━━━━━━━━━━━━━━━━━━

| Bloque                 | Tiempo     | Qué cubre                                              |
|------------------------|------------|--------------------------------------------------------|
| Portada + gancho       | 1 min      | Pregunta inicial, botón verde                          |
| ¿Quién soy?            | 1.5 min    | Bio, credibilidad                                      |
| Roadmap                | 1 min      | Vista general de los 9 bloques                         |
| DevOps vs GitOps       | 4 min      | Loop, Git al centro, tabla comparativa                 |
| Git comandos           | 3.5 min    | Comandos clave, git revert                             |
| Pull Request           | 3.5 min    | Anatomía, triggers, Branch Protection                  |
| **GitHub Actions**     | **11 min** | Qué es, runners, ci.yml, deploy.yml, schedule, secrets |
| Copilot                | 2 min      | 3 roles en el proyecto                                 |
| El Proyecto            | 3 min      | Casuística, arquitectura, 60 segundos                  |
| **Demo en vivo**       | **8 min**  | 9 pasos en tiempo real                                 |
| Rollback               | 2 min      | git revert en vivo                                     |
| Conclusiones + cierre  | 2.5 min    | 5 conclusiones, QR, cierre                             |
| **TOTAL**              | **43 min** |                                                        |

> Buffer de 2 min para preguntas rápidas o si el CI tarda más de lo esperado.

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# RESET PARA ENSAYOS
# ━━━━━━━━━━━━━━━━━━━━━━━

Después de cada ensayo completo, ejecuta:

```powershell
.\scripts\reset-demo.ps1
```

Esto hace 4 cosas automáticamente:
1. Vuelve a `main` y trae los últimos cambios
2. Elimina las ramas `feature/*` del ensayo anterior
3. Restaura `event.json` a `speakerStatus: "pending"` y `speaker: "Por confirmar"`
4. Commit con `[skip ci]` + push → la web en Pages vuelve al banner naranja

**Flujo de ensayo:**
```
reset-demo.ps1  →  demo completa  →  rollback (opcional)  →  reset-demo.ps1  →  repite
```

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# PLAN B — SI ALGO FALLA
# ━━━━━━━━━━━━━━━━━━━━━━━

| Problema | Qué decir / hacer |
|---|---|
| WiFi lento | Muestras `npm start` en `localhost:4200`, editas el JSON en local y dices: "En producción esto desplegaría automáticamente." |
| CI tarda mucho | Explicas el YAML de `ci.yml` línea a línea mientras esperas |
| Deploy falla | "Perfecto. Esto es exactamente para lo que existe el rollback." → ejecutas el rollback en vivo |
| GitHub caído | Tienes capturas de pantalla de todo el flujo guardadas en el escritorio |

---

# ━━━━━━━━━━━━━━━━━━━━━━━
# FRASES CLAVE
# ━━━━━━━━━━━━━━━━━━━━━━━

- "Tu única acción es el Pull Request. Git y GitHub hacen el resto."
- "Si no está en Git, no existe."
- "Merge a main equivale a deploy en producción. Siempre."
- "El rollback no tiene modo pánico. Solo tiene git revert."
- "Si sabes hacer un commit, estás listo para GitOps."
- "60 segundos. Cero SSH. Cero servidores."

---

*GitHub Day Lima 2026 · José Hurtado Rivas · @josehurtadorivas*
