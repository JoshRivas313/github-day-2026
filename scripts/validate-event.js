/**
 * validate-event.js
 * Valida que src/assets/config/event.json contenga todos los campos requeridos.
 * Usado por ci.yml en cada Pull Request hacia main.
 *
 * GitHub Day Lima 2026 — José Hurtado Rivas
 */

const fs = require('fs');
const path = require('path');

const EVENT_JSON_PATH = path.join(__dirname, '..', 'src', 'assets', 'config', 'event.json');
const REQUIRED_FIELDS = ['event', 'speaker', 'speakerStatus', 'topic', 'schedule', 'location'];
const VALID_SPEAKER_STATUS = ['pending', 'confirmed'];

console.log('\n📋 Validando event.json...\n');

// 1. Verificar que el archivo existe
if (!fs.existsSync(EVENT_JSON_PATH)) {
  console.error('❌ ERROR: No se encontró event.json en src/assets/config/');
  console.error(`   Ruta esperada: ${EVENT_JSON_PATH}`);
  process.exit(1);
}

// 2. Verificar que el JSON es válido
let config;
try {
  const raw = fs.readFileSync(EVENT_JSON_PATH, 'utf8');
  config = JSON.parse(raw);
  console.log('✅ JSON válido — sintaxis correcta');
} catch (err) {
  console.error('❌ ERROR: El archivo event.json tiene un error de sintaxis JSON.');
  console.error(`   Detalle: ${err.message}`);
  process.exit(1);
}

// 3. Verificar que todos los campos requeridos existen y no están vacíos
let hasErrors = false;

REQUIRED_FIELDS.forEach(field => {
  const value = config[field];
  if (value === undefined || value === null) {
    console.error(`❌ Campo faltante: "${field}"`);
    hasErrors = true;
  } else if (typeof value === 'string' && value.trim() === '') {
    console.error(`❌ Campo vacío: "${field}"`);
    hasErrors = true;
  } else {
    console.log(`✅ ${field}: "${value}"`);
  }
});

// 4. Validar que speakerStatus tenga un valor permitido
if (config.speakerStatus && !VALID_SPEAKER_STATUS.includes(config.speakerStatus)) {
  console.error(`❌ speakerStatus inválido: "${config.speakerStatus}". Valores permitidos: ${VALID_SPEAKER_STATUS.join(', ')}`);
  hasErrors = true;
}

// 5. Resultado final
if (hasErrors) {
  console.error('\n❌ VALIDACIÓN FALLIDA — El PR no puede mergearse hasta corregir los errores.\n');
  process.exit(1);
} else {
  console.log('\n✅ VALIDACIÓN EXITOSA — event.json tiene todos los campos requeridos.\n');
  console.log('   Resumen:');
  console.log(`   Evento:    ${config.event}`);
  console.log(`   Speaker:   ${config.speaker}`);
  console.log(`   Tema:      ${config.topic}`);
  console.log(`   Horario:   ${config.schedule}`);
  console.log(`   Ubicación: ${config.location}`);
  console.log('');
  process.exit(0);
}
