# REVIEW

## Bugs detectados

- No existe la carpeta `src/`, por lo que actualmente no hay código fuente que validar ni cubrir con tests.
- No existe configuración de test runner (por ejemplo, Vitest), lo que impide ejecutar una suite automatizada de pruebas.

## Refactors sugeridos

- Inicializar una estructura base de aplicación con `src/` y separar la lógica por módulos para habilitar pruebas unitarias por responsabilidad.
- Incorporar contratos de entrada/salida (tipado o validaciones explícitas) para facilitar casos de prueba y evitar errores silenciosos.

## Mejoras de calidad de código

- Añadir configuración de calidad mínima del proyecto:
  - `vitest` para pruebas unitarias
  - cobertura (`--coverage`) con umbral mínimo
  - linting/formatting (ESLint + Prettier)
  - CI que ejecute tests y linters en cada PR
- Definir guía de contribución (`CONTRIBUTING.md`) con convención de estructura de carpetas y criterios de aceptación de pruebas.
