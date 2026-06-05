# GUIÓN COMPLETO — SLIDE POR SLIDE
## GitOps: El Superpoder del Pull Request para automatizar tus despliegues
## GitHub Day Lima 2026 · José Hurtado Rivas · 40 minutos

---

> 🗣️ **DICES** → lo que dices en voz alta
> 🖥️ **HACES** → acción en pantalla / terminal
> ⏸️ **PAUSA** → respira, deja reaccionar a la audiencia
> ⏱️ **TIEMPO** → minutos acumulados

---

## SLIDE 01 — PORTADA ⏱️ 0:00

🖥️ **HACES:** Portada en pantalla. Silencio 3 segundos.

🗣️ **DICES:**
"Buenos días. ¿Cómo están?

Antes de presentarme, una pregunta rápida.
¿Cuántos de ustedes hicieron un deploy manual esta semana?
SSH al servidor, editar un archivo en producción,
copiar archivos por FTP, o rezar para que no falle nada."

⏸️ **PAUSA** — dejas que levanten la mano

"Tranquilos, no los voy a juzgar. Yo también lo hice.
Hoy les voy a mostrar que eso tiene solución.
Y la solución es este botón verde."

🖥️ **HACES:** Señalas el botón "Merge pull request" en la portada.

"Ese es su único trabajo. Presionar ese botón.
Git y GitHub hacen el resto.
Bienvenidos a GitOps."

---

## SLIDE 02 — NEGRO ⏱️ 1:00

🖥️ **HACES:** Avanzas en silencio.

---

## SLIDE 03 — ¿QUIÉN SOY? ⏱️ 1:05

🗣️ **DICES:**
"Mi nombre es José Hurtado Rivas.
Soy desarrollador frontend, entusiasta de DevOps,
y pueden encontrar todo mi trabajo en github.com/josehurtadorivas.

He roto producción suficientes veces
para saber que el rollback debe ser un comando,
no una reunión de emergencia."

⏸️ **PAUSA** — habrá sonrisas

"Todo lo que van a ver hoy viene de haber aprendido de esos errores."

---

## SLIDE 04 — ROADMAP ⏱️ 2:30

🗣️ **DICES:**
"En estos 40 minutos recorremos 9 bloques.

DevOps vs GitOps, Git, Pull Request, GitHub Actions, Copilot,
el proyecto, la demo en vivo, el rollback y las conclusiones.

La estrella es la demo en vivo."

🖥️ **HACES:** Señalas el nodo "Demo en vivo".

"Todo lo anterior existe para que ese momento tenga sentido completo.
Empecemos."

---

## SLIDE 05 — DEVOPS: EL LOOP ⏱️ 3:30

🗣️ **DICES:**
"Primero necesitamos hablar de DevOps.
No porque sea nuevo para ustedes,
sino porque GitOps viene de ahí.

DevOps es la cultura que une desarrollo y operaciones
con un objetivo claro: entregar software más rápido y con más calidad.

El famoso loop infinito:
planeas, codeas, construyes, testeas,
haces el release, despiegas, operas, monitoras...
y vuelves a empezar. Siempre en movimiento."

---

## SLIDE 06 — GITOPS: GIT AL CENTRO ⏱️ 4:30

🗣️ **DICES:**
"GitOps toma ese loop y hace algo muy concreto:
pone a Git en el centro como operador del sistema.

Ya no eres tú quien ejecuta los cambios manualmente. Es Git.

Cualquier cambio al sistema, sin excepción,
pasa por un commit, por un Pull Request, por un merge."

⏸️ **PAUSA**

"Si algo está en Git, existe en el sistema.
Si no está en Git, no existe.

GitOps no reemplaza a DevOps.
Es DevOps con Git como único punto de control."

---

## SLIDE 07 — TABLA COMPARATIVA ⏱️ 5:30

🗣️ **DICES:**
"Miren esta tabla. Fila por fila.

En DevOps el operador es un humano.
En GitOps el operador es Git.

En DevOps los cambios van por scripts configurados manualmente.
En GitOps todo cambio pasa por un Pull Request. Siempre.

La auditoría en DevOps vive en logs externos.
En GitOps la auditoría es el git log.
Quién cambió qué, cuándo, y por qué — todo en el mismo lugar.

Pero la fila más importante es esta."

🖥️ **HACES:** Señalas la fila "Rollback".

"En DevOps el rollback es manual, a veces imposible.
En GitOps el rollback es git revert. Un comando. 60 segundos.
Lo van a ver en vivo al final."

---

## SLIDE 08 — NEGRO ⏱️ 7:00

🖥️ **HACES:** Avanzas en silencio.

---

## SLIDE 09 — GIT: COMANDOS QUE YA USAS ⏱️ 7:05

🗣️ **DICES:**
"Ahora Git. Todos lo usamos, pero pocos al máximo.

Estos seis los domina todo el mundo en esta sala:
add, commit, push, pull, merge, status.

Son el vocabulario básico. El pan de cada día.
Pero Git tiene mucho más debajo del capó."

---

## SLIDE 10 — COMANDOS QUE DEBERÍAS USAR ⏱️ 8:00

🗣️ **DICES:**
"Cuatro que deberían usar regularmente.

git stash — guarda cambios sin hacer commit.
¿Necesitas cambiar de rama urgente sin perder tu trabajo?
git stash. Luego git stash pop para recuperarlos.

git cherry-pick — trae UN commit específico de otra rama.
Tu compañero tiene un fix crítico que necesitas ahora mismo. Cherry-pick.

git rebase -i HEAD~3 — limpia los últimos commits antes de abrir el PR.
Historial ordenado, PR más fácil de revisar.

git reflog — su red de seguridad total.
Registra todo lo que pasó en el repo.
Hicieron un reset y borraron commits. git reflog los lista.
git checkout al SHA. Problema resuelto."

---

## SLIDE 11 — LOS QUE CASI NADIE CONOCE ⏱️ 9:30

🗣️ **DICES:**
"Tres que cuando los muestro siempre hay alguien que dice
'no sabía que eso existía'.

git bisect.
Algo en producción está fallando pero no saben qué commit lo rompió.
git bisect hace búsqueda binaria automática en el historial.
Le dicen: este commit funciona, este no funciona.
Git encuentra el commit culpable. Sin revisar uno por uno.

git worktree.
Dos ramas activas al mismo tiempo en dos carpetas distintas.
Están en feature-A y necesitan revisar feature-B sin perder el contexto.

git commit --fixup.
Hicieron un commit, hay un error pequeño, no quieren un commit 'fix typo'.
--fixup lo corrige apuntando limpiamente al commit anterior."

---

## SLIDE 12 — GIT REVERT ⏱️ 11:00

🗣️ **DICES:**
"Y el más importante de esta charla: git revert.

No git reset. git revert.

La diferencia es crítica.
git reset borra commits del historial.
git revert crea un commit nuevo que deshace los cambios.

En GitOps usamos revert porque mantiene el historial intacto,
es trazable, auditable, y sigue el mismo flujo que cualquier cambio:
commit, push, deploy automático.

Un comando. Un push. 60 segundos. Producción restaurada.
No porque yo lo diga — sino porque lo van a ejecutar en 20 minutos."

---

## SLIDE 13 — ANATOMÍA DEL PR PERFECTO ⏱️ 12:30

🗣️ **DICES:**
"El Pull Request no es un trámite burocrático.
Es la puerta de producción.

Un PR bien hecho tiene estas partes.

Título con Conventional Commits:
feat(event): confirm speaker.
No 'cambios varios'. No 'arreglos'.

Descripción: qué cambió y por qué.
No para el reviewer de hoy,
sino para el José del futuro que mire el historial en 6 meses.

Labels, reviewer asignado, y los checks de CI
corriendo automáticamente desde el push."

---

## SLIDE 14 — EL PR DISPARA EL PIPELINE ⏱️ 13:30

🗣️ **DICES:**
"Cuando abren un PR hacia main,
GitHub Actions se activa automáticamente.
Nadie lo inició manualmente. El PR lo disparó.

El CI hace exactamente esto:
instala dependencias, construye Angular en producción,
valida que event.json tenga todos los campos correctos,
y deja un comentario automático en el PR con el resultado.

Si algo falla, el botón de merge se bloquea.
Sin checks verdes, no hay merge.
Sin merge, no hay deploy.
El sistema los protege automáticamente.

Lo van a ver cuando abra el PR en la demo."

---

## SLIDE 15 — BRANCH PROTECTION RULES ⏱️ 14:45

🗣️ **DICES:**
"Esto se refuerza con las Branch Protection Rules.
Settings → Branches → Add rule → main.

Seis reglas activas en el proyecto:

Require pull request before merging.
Nadie hace push directo a main.

Require status checks to pass.
El CI tiene que estar verde.

Require at least one approval.
Al menos un reviewer aprueba.

Dismiss stale reviews on new push.
Si haces un commit después de la aprobación, se cancela.
Evita aprobar y después cambiar silenciosamente.

Block force pushes.
Nadie sobreescribe el historial de main.

Block direct pushes.
Nadie. Ni el owner del repositorio.
Todo pasa por un PR. Sin excepciones."

---

## SLIDE 16 — NEGRO ⏱️ 16:15

🖥️ **HACES:** Avanzas en silencio.

---

## SLIDE 17 — ¿QUÉ ES GITHUB ACTIONS? ⏱️ 16:20

🗣️ **DICES:**
"GitHub Actions es el motor de automatización integrado en GitHub.
No es una herramienta externa que tienes que conectar.
Vive dentro del repositorio.

La idea es simple:
algo ocurre en el repositorio — un push, un PR, una hora del día —
y GitHub ejecuta código automáticamente.

Todo se define en archivos YAML dentro de .github/workflows.
Si el archivo está en Git, el workflow existe.
Si no está, no existe.
Git como fuente de verdad también para la automatización.

Un archivo de workflow tiene cuatro partes."

🖥️ **HACES:** Señalas la estructura en pantalla.

"name — el nombre que aparece en la pestaña de Actions.

on — el trigger. Qué evento dispara el workflow.
push, pull_request, schedule, o workflow_dispatch para disparo manual.

jobs — los bloques de trabajo.
Cada job corre en su propia máquina, en paralelo con los demás
a menos que uses needs para encadenarlos.

steps — los pasos dentro de cada job.
Se ejecutan en secuencia, uno detrás del otro."

---

## SLIDE 18 — RUNNERS ⏱️ 18:00

🗣️ **DICES:**
"Una parte que poco se explica: el runner.

Cuando Actions corre un workflow,
GitHub levanta una máquina virtual limpia que no existía antes.

ubuntu-latest — Ubuntu con Node, Python, Git y Docker preinstalados.
Es la que usamos en este proyecto.

Cada ejecución es una máquina nueva.
No quedan residuos del run anterior.
No hay estado compartido entre ejecuciones.

Alguien abre un PR — GitHub levanta una máquina,
corre los steps, la destruye.

Esto es lo que hace que el CI sea reproducible.
Si pasa en Actions, pasa en producción.
Si falla, el error es real.
Se acabó el 'en mi máquina funciona'."

⏸️ **PAUSA**

"Y es gratis para repositorios públicos."

---

## SLIDE 19 — CI.YML LÍNEA POR LÍNEA ⏱️ 19:15

🖥️ **HACES:** Muestras `.github/workflows/ci.yml` del proyecto real.

🗣️ **DICES:**
"Este es el ci.yml real. Lo recorremos juntos.

```yaml
name: CI — Build & Validate
```
Este nombre aparece en el PR como check.
Si falla, el botón de merge se bloquea con este nombre.

```yaml
on:
  pull_request:
    branches: [main]
```
Solo se activa cuando alguien abre un PR hacia main.
No en push directo. No en otras ramas.

```yaml
permissions:
  contents: read
  pull-requests: write
```
Principio de mínimo privilegio.
write en pull-requests es para dejar el comentario automático.

```yaml
runs-on: ubuntu-latest
```
Aquí le decimos: dame una máquina Ubuntu limpia.

Ahora los steps.

Step 1 — actions/checkout@v4.
Trae el código del repositorio a la máquina virtual.
Sin este step la máquina no tiene tu código.

Step 2 — setup-node con cache: npm.
Instala Node 20 y activa el cache.
Primera vez tarda. Las siguientes son instantáneas.

Step 3 — npm ci.
No npm install. npm ci.
Usa el lockfile exacto, no lo modifica, borra node_modules antes.
Reproducible. Siempre el mismo resultado.

Step 4 — npm run build:prod.
Construye Angular en producción.
Error de TypeScript → falla aquí → PR bloqueado.

Step 5 — node scripts/validate-event.js.
Nuestro validador. Verifica que event.json tenga todos los campos
y que speakerStatus sea exactamente pending o confirmed.
No Confirmed con mayúscula. No PENDING. Exactamente esos valores.

Step 6 — actions/github-script con if: always().
Corre siempre, aunque algo haya fallado.
Deja una tabla en el PR: cada check verde o rojo.
El reviewer lo ve sin ir a la pestaña de Actions."

---

## SLIDE 20 — DEPLOY.YML LÍNEA POR LÍNEA ⏱️ 21:30

🖥️ **HACES:** Abres `.github/workflows/deploy.yml`.

🗣️ **DICES:**
"El deploy.yml. El que hace la magia real.

```yaml
on:
  push:
    branches: [main]
```
Trigger: push a main.
¿Cuándo ocurre esto con Branch Protection activo?
Solo cuando alguien hace merge de un PR.
Merge = push a main = deploy automático. Sin excepción.

```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```
Solo un deploy activo a la vez.
Si hay merge mientras corre un deploy, el anterior se cancela.
Sin deploys duplicados, sin condiciones de carrera.

Dos jobs encadenados con needs.

Job build:
checkout, Node, npm ci,
ng build con --base-href /nombre-del-repo/,
y upload del artefacto a Pages.

El --base-href es crítico.
Sin él, Angular busca los assets en la raíz del dominio
y no los encuentra. La web carga en blanco.
Primer error que tuve. Copilot lo detectó en 10 segundos.

Job deploy:
```yaml
needs: build
```
No corre si build falló. Punto.
usa actions/deploy-pages — la action oficial de GitHub.

Al final, el summary del workflow:
URL del sitio, quién hizo el push, hash del commit, timestamp.
Cada deploy documentado automáticamente."

---

## SLIDE 21 — SCHEDULE.YML ⏱️ 23:30

🖥️ **HACES:** Abres `.github/workflows/schedule.yml`.

🗣️ **DICES:**
"El tercero. El que más impresiona.

```yaml
on:
  schedule:
    - cron: '0 8 * * *'
```
Todos los días a las 8 AM UTC — 3 AM hora de Lima.
GitHub Actions se despierta solo. Nadie lo llamó. Nadie hizo nada.

Lo que hace:
lee el event.json actual,
genera docs/status.json con esa información más un timestamp,
y hace commit con el mensaje:
chore(status): daily snapshot 2026-06-04 [skip ci]

El [skip ci] es importante.
Sin él entraríamos en loop:
schedule hace commit → dispara deploy → deploy hace commit → dispara deploy.

Push directo a main. El bot de Actions tiene permisos para eso.

El resultado: todos los días a las 3 AM
hay un snapshot del estado del sistema en Git.
Sin que nadie lo pidió.

Ese es el concepto más puro de GitOps:
Git como operador que trabaja 24 horas sin descanso."

---

## SLIDE 22 — SECRETS Y CONDICIONALES ⏱️ 25:00

🗣️ **DICES:**
"Tres conceptos rápidos antes de seguir.

Los contextos de GitHub.
github.actor — quién hizo el push.
github.sha — el hash exacto del commit.
github.ref — la rama. refs/heads/main.
github.event_name — push, pull_request, schedule.

Los secrets.
secrets.GITHUB_TOKEN es automático, GitHub lo crea por ejecución.
Para sus propias claves: Settings → Secrets → New secret.
Nunca en el código. Siempre en secrets.

Los condicionales.
if: failure() — corre solo si algo falló. Para notificaciones de error.
if: github.ref == 'refs/heads/main' — solo en main.
if: contains(github.event.commits[0].modified, 'event.json') —
solo si este commit tocó el event.json.
Si solo cambió un CSS, el deploy no corre.

Los workflows no ejecutan todo ciegamente. Piensan."

---

## SLIDE 23 — COPILOT EN EL EDITOR ⏱️ 26:15

🗣️ **DICES:**
"GitHub Copilot estuvo en cada etapa de este proyecto.

Antes de escribir el ci.yml, escribí este comentario en el editor:
'Create a GitHub Actions workflow that validates
an Angular build and checks event.json fields on pull request to main.'

Copilot sugirió el workflow completo.
Triggers, jobs, steps, permisos, el script de comentario en el PR. Todo.

No lo acepté ciegamente. Lo revisé, lo ajusté, lo mejoré.
Pero el punto de partida no fue un YAML vacío. Fue el 80% resuelto.

Copilot no reemplaza el conocimiento. Lo acelera."

---

## SLIDE 24 — COPILOT EN CADA ETAPA ⏱️ 27:10

🗣️ **DICES:**
"Copilot estuvo presente en cuatro momentos concretos.

En el validador:
Le pedí que validara los campos de event.json incluyendo el enum.
Generó el script de Node completo con exit codes y mensajes de error.

En el template:
Tenía dos divs con ngIf separados para el campo speaker.
Copilot sugirió colapsar ambos en uno con ngClass.
El tipo de mejora que un senior señalaría en un code review.

En el service de Angular:
Al escribir el catchError, completó el mensaje de error exacto
basándose en el nombre del archivo que estaba cargando.
No una sugerencia genérica. Contexto real del proyecto.

Y cuando el deploy falló con pantalla en blanco:
Le pegué el error a Copilot Chat.
Me dijo: el problema es el --base-href.
Resuelto en 10 segundos."

---

## SLIDE 25 — LOS 3 ROLES EN EL PROYECTO ⏱️ 28:05

🗣️ **DICES:**
"Tres roles concretos.

Generador: el ci.yml y el validate-event.js nacieron de comentarios.

Debugger: el error del deploy resuelto sin abrir Stack Overflow.

Revisor: sugirió --no-edit en el git revert
para que el rollback automatizado no espere input manual.

La conclusión no es que Copilot escribió el proyecto.
Es que cada etapa fue más rápida.
Y en una demo en vivo, más rápido significa más tiempo
para explicar por qué funciona, no cómo se escribe."

---

## SLIDE 26 — LA CASUÍSTICA ⏱️ 28:50

🗣️ **DICES:**
"El proyecto. La casuística es simple y real."

🖥️ **HACES:** Señalas la frase en pantalla.

"El speaker cambió. Actualiza la web.

Sin GitOps:
SSH al servidor, editar el archivo en producción,
avisar al equipo que espere, y si algo salió mal
nadie sabe exactamente qué cambió ni cómo revertirlo.

Con GitOps:
Abro el event.json en mi editor local.
Cambio dos campos: speaker y speakerStatus.
commit, push, PR, CI valida, reviewer aprueba, merge.
Deploy automático. 60 segundos.
La web pasa del banner naranja 'Speaker pendiente'
al banner verde '¡Speaker Confirmado!'.

Y hay un registro completo de quién cambió qué, cuándo y por qué."

---

## SLIDE 27 — ARQUITECTURA ⏱️ 30:10

🗣️ **DICES:**
"La arquitectura del proyecto es simple a propósito.

José edita el event.json en local.
Commit y push a feature branch.
Pull Request en GitHub.
CI valida. Reviewer revisa.
Merge a main.
deploy.yml corre automáticamente.
GitHub Pages sirve la versión actualizada.

El nodo central es este."

🖥️ **HACES:** Señalas event.json en el diagrama.

"Un archivo JSON. Esa es la fuente de verdad.
Si quieren cambiar algo en la web, cambian ese archivo. Solo ese archivo."

---

## SLIDE 28 — LOS 60 SEGUNDOS ⏱️ 31:00

🗣️ **DICES:**
"Y todo esto en 60 segundos desde el merge.

Segundo 0: merge completado.
Segundo 2: deploy.yml se dispara.
Segundo 15: npm ci termina con cache.
Segundo 35: ng build production listo.
Segundo 58: GitHub Pages actualizado.
Segundo 60: la web está en producción.

Cero SSH. Cero servidores. Cero FTP.
Solo Git.

Ahora vamos a ver exactamente eso."

---

## SLIDE 29 — CHECKLIST DEMO ⏱️ 31:30

🗣️ **DICES:**
"9 pasos. 8 minutos. Sin tocar ningún servidor."

🖥️ **HACES:** Cambias a terminal + navegador.

---

## 🔴 SLIDE 30 — DEMO EN VIVO ⏱️ 31:40

### PASO 1 — Crear la rama

🖥️ **ESCRIBES:**
```bash
git checkout -b feature/confirm-speaker
```

🗣️ **DICES:**
"Primero creo mi rama de feature.
Nunca en main directamente. Esa es la regla número uno."

---

### PASO 2 — Mostrar la web actual

🖥️ **HACES:** Cambias a la pestaña de GitHub Pages.

🗣️ **DICES:**
"Esta es la web en producción ahora mismo.
Banner naranja: speaker pendiente de confirmación.
Campo speaker: Por confirmar.
Vamos a cambiarlo."

---

### PASO 3 — Editar event.json

🖥️ **HACES:** Abres `src/assets/config/event.json`. Cambias:
```json
"speaker":       "Por confirmar"  →  "José Hurtado Rivas"
"speakerStatus": "pending"        →  "confirmed"
```
Guardas con Ctrl+S.

🗣️ **DICES:**
"Dos campos en un JSON. Nada más.
Este archivo es la fuente de verdad del sistema."

---

### PASO 4 — Ver el diff

🖥️ **ESCRIBES:**
```bash
git diff src/assets/config/event.json
```

🗣️ **DICES:**
"Rojo: lo que estaba. Verde: lo que va a quedar.
Trazabilidad desde el primer momento."

---

### PASO 5 — Commit

🖥️ **ESCRIBES:**
```bash
git add src/assets/config/event.json
git commit -m "feat(event): confirm speaker"
```

🗣️ **DICES:**
"Conventional Commits. Esto es lo que va a aparecer
en el git log cuando alguien revise el historial en 6 meses."

---

### PASO 6 — Push

🖥️ **ESCRIBES:**
```bash
git push origin feature/confirm-speaker
```

🗣️ **DICES:**
"Push a la feature branch. No a main. A mi rama."

---

### PASO 7 — Crear el Pull Request

🖥️ **HACES:** Vas al navegador. GitHub muestra el banner amarillo.
Clic en "Compare & pull request".
- Título: `feat(event): confirm speaker`
- Descripción: `Confirma el speaker del evento. Demo del flujo GitOps completo.`
- Clic en "Create pull request"

🗣️ **DICES:**
"GitHub detectó el push y me ofrece crear el PR.
Título y descripción con Conventional Commits.
Y miren lo que pasa inmediatamente después de crearlo."

---

### PASO 8 — Observar el CI en tiempo real

🖥️ **HACES:** En el PR aparece "CI — Build & Validate · In progress"

🗣️ **DICES:**
"El ci.yml se disparó solo. Nadie lo llamó.
El simple hecho de abrir el PR activó el workflow."

⏸️ **ESPERAS** ~60 segundos. Mientras tanto:

"Yo no hice nada más que hacer push.
GitHub Actions está trabajando solo.
Esto es exactamente GitOps:
el operador es el sistema, no el humano."

🖥️ **HACES:** Cuando termina señalas el check verde y el comentario automático.

"Check verde. El workflow dejó este comentario automático.
npm install: verde. Build: verde. JSON válido: verde.
El PR está listo para mergear."

---

### PASO 9 — Aprobar y mergear

🖥️ **HACES:**
1. Add your review → Approve → escribes `"LGTM! GitOps en acción 🚀"` → Submit
2. Merge pull request → Confirm merge
3. Cambias a la pestaña Actions

🗣️ **DICES:**
"Apruebo y mergeo.
Ahora observen Actions."

🖥️ **HACES:** Ves el deploy.yml con indicador amarillo.

"El deploy.yml se disparó automáticamente.
Nadie ejecutó un comando de deploy.
El merge fue la instrucción."

⏸️ **ESPERAS** ~60 segundos.

🖥️ **HACES:** Abres la URL de GitHub Pages desde el summary.

"Aquí está."

🖥️ **HACES:** Señalas el banner verde en pantalla.

"Banner verde. ¡Speaker Confirmado!
El nombre en verde. El campo cambió.
Sin SSH. Sin servidores. Solo un Pull Request."

⏸️ **PAUSA larga — 3 segundos**

---

## SLIDE 31 — ROLLBACK ⏱️ 38:40

🖥️ **HACES:** Vuelves al slide. Luego a la terminal.

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
"Veo el historial. Copio el SHA del commit problemático."

🖥️ **ESCRIBES:**
```bash
git revert <SHA> --no-edit
git push origin main
```

🗣️ **DICES:**
"git revert crea un commit nuevo que deshace exactamente esos cambios.
--no-edit evita que se abra el editor — útil en rollbacks automatizados.
Push a main dispara el deploy.yml automáticamente.

60 segundos. La web vuelve al banner naranja.

El rollback no tiene modo pánico.
No tiene número de emergencia.
No tiene reunión de crisis.
Sigue exactamente el mismo flujo que cualquier cambio.
Predecible. Trazable. Sin drama."

---

## SLIDE 32 — CONCLUSIONES ⏱️ 40:40

🗣️ **DICES:**
"Cinco cosas para llevarse de esta charla.

Una: DevOps más Git como fuente de verdad es igual a GitOps.
No son cosas distintas. GitOps es la evolución natural.

Dos: git bisect, git reflog y git worktree existen. Úsenlos.

Tres: el Pull Request no es un trámite.
Es la puerta de producción. Trátenlo como tal.

Cuatro: GitHub Actions no es magia.
Es un archivo YAML en .github/workflows.
Y con ese archivo pueden automatizar cualquier cosa.

Cinco: Copilot no reemplaza el flujo. Lo acelera en cada etapa.

Y la más importante:
si saben hacer un commit,
están listos para GitOps.
No necesitan Kubernetes. No necesitan Docker. No necesitan AWS.
Solo Git y GitHub."

---

## SLIDE 33 — #GITHUBDAYLIMA ⏱️ 42:10

🖥️ **HACES:** Avanzas rápido.

---

## SLIDE 34 — CIERRE ⏱️ 42:15

🗣️ **DICES:**
"Eso es todo de mi parte. El repositorio está aquí."

🖥️ **HACES:** Señalas el QR.

"Tiene el código Angular, los tres workflows,
el README con el script de demo paso a paso,
y el event.json listo para su primer PR de GitOps.

Escaneen el QR, clonen el repo,
cambien el speakerStatus a confirmed,
abran un PR, y vean el deploy automático con sus propios ojos.

Tu turno."

⏸️ **PAUSA** — aplauso

"Gracias. Si tienen preguntas, con gusto las respondo."

---

# CONTROL DE TIEMPO

| Bloque | Tiempo |
|---|---|
| Portada + gancho | 1 min |
| ¿Quién soy? | 1.5 min |
| Roadmap | 1 min |
| DevOps vs GitOps | 3.5 min |
| Git | 4 min |
| Pull Request | 3.5 min |
| GitHub Actions | 9.5 min |
| Copilot | 2.5 min |
| El Proyecto | 2.5 min |
| Demo en vivo | 7 min |
| Rollback | 2 min |
| Conclusiones + cierre | 2 min |
| **TOTAL** | **40 min** |

---

# RESET PARA ENSAYOS

Después de cada ensayo completo ejecuta:

```powershell
.\scripts\reset-demo.ps1
```

Hace 4 cosas en 30 segundos:
1. Vuelve a `main` y trae los últimos cambios
2. Elimina las ramas `feature/*` del ensayo anterior
3. Restaura `event.json` a `speaker: "Por confirmar"` y `speakerStatus: "pending"`
4. Commit `[skip ci]` + push — la web vuelve al banner naranja automáticamente

**Flujo de ensayo:**
```
reset-demo.ps1 → demo completa → rollback (opcional) → reset-demo.ps1 → repite
```

---

# PLAN B — SI ALGO FALLA EN LA DEMO

| Problema | Qué hacer |
|---|---|
| WiFi lento | `npm start` en localhost:4200, editas el JSON en local |
| CI tarda más | Explicas el YAML de ci.yml línea a línea mientras esperas |
| Deploy falla | "Perfecto, esto es para lo que existe el rollback" → ejecutas rollback en vivo |
| GitHub caído | Tienes capturas de toda la demo guardadas en el escritorio |

---

# FRASES CLAVE PARA RECORDAR

- "Tu única acción es el Pull Request. Git y GitHub hacen el resto."
- "Si no está en Git, no existe."
- "Merge a main equivale a deploy en producción. Siempre."
- "El rollback no tiene modo pánico. Solo tiene git revert."
- "Si sabes hacer un commit, estás listo para GitOps."
- "60 segundos. Cero SSH. Cero servidores."

---

*GitHub Day Lima 2026 · José Hurtado Rivas · @josehurtadorivas · #GitHubDayLima*
