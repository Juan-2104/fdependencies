### Documentación para el Repositorio `G6flow_dependencies`

---

#### Descripción:

El repositorio `G6Flow_dependencies` contiene un conjunto de utilidades y funciones esenciales para el proyecto G6 Flow. Estas dependencias están diseñadas para ser reutilizables y proporcionar funcionalidades comunes en todo el proyecto.

#### Estructura del Repositorio:

- `src/dependencies`: Directorio principal que contiene todas las utilidades y funciones.
  - `index.js`: Archivo central que exporta todas las utilidades y funciones para ser utilizadas en otros proyectos.
  - `bei-logger.js`: Utilidad para registrar eventos o mensajes.
  - `crypto-utils.js`: Funciones para cifrar y descifrar datos.
  - `json-eval.js`: Funciones relacionadas con la evaluación y serialización de JSON.
  - `secutils.js`: Utilidades relacionadas con la seguridad y la validación de claves API.

#### Uso:

1. **Instalación**:
   - Asegúrate de tener Node.js y npm instalados.
   - Clona el repositorio: `git clone https://github.com/Juan-2104/flow_dependencies.git`
   - Navega al directorio del repositorio: `cd flow_dependencies`
   - Instala las dependencias: `npm install`

2. **Importar Utilidades**:
   - Una vez que el paquete esté instalado en tu proyecto, puedes importar las utilidades y funciones de la siguiente manera:
     ```javascript
     const { Logger, EncryptData, DecryptData, ... } = require('flow_dependencies');
     ```

#### Nomenclatura Estándar de Versiones (SemVer):

El versionado de este repositorio sigue el estándar SemVer. La estructura es `MAJOR.MINOR.PATCH`, donde:

- `MAJOR`: Cambios incompatibles que requieren una modificación por parte del usuario.
- `MINOR`: Adición de características de manera retrocompatible.
- `PATCH`: Correcciones de errores retrocompatibles.

Para versiones pre-lanzamiento (como betas), se añade un guion seguido de un identificador. Por ejemplo, para la versión beta 1:

```
1.0.0-beta.1
```