import throttle from './throttle';

// Función de consola a throttlejar
function consoleLog(message: string) {
  console.log(message);
}

// Función throttlejada para la consola
const throttledConsoleLog = throttle(consoleLog, 500);

// Ejemplos de uso
throttledConsoleLog('Hola, este mensaje debería aparecer inmediatamente.');
throttledConsoleLog('Este mensaje debería aparecer después de 500ms.');
throttledConsoleLog('Este mensaje debería ser throttlejado.');

// Ejemplo de función para probar
function testFunction() {
  console.log('Probando la función throttle...');
}

// Función throttlejada para la función de prueba
const throttledTestFunction = throttle(testFunction, 1000);

// Ejemplos de uso
throttledTestFunction();
throttledTestFunction();
throttledTestFunction();
