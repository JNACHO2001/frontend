# Interfaz de Administración de Usuarios (Frontend)

## Descripción general

Este proyecto es una interfaz web desarrollada con Angular para la gestión de usuarios. Proporciona componentes y servicios básicos para mostrar, crear y manipular información de usuarios desde el frontend, y está preparado para integrarse con un backend RESTful. Incluye la estructura típica de una aplicación Angular con componentes, servicios, modelos y configuración para la ejecución local.

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- RxJS
- Angular CLI
- Node.js / npm

## Requisitos previos

- Node.js (>= 14.x) y npm instalados
- Angular CLI (opcionalmente global: `npm install -g @angular/cli`)

## Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clonar el repositorio:

```bash
git clone https://github.com/JNACHO2001/frontend.git
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
ng serve
```

Nota: Si no tienes `ng` disponible globalmente, puedes usar `npx ng serve` o ejecutar el script npm correspondiente si está definido en `package.json` (`npm run start` / `npm start`).

## Estructura del proyecto

La estructura principal del proyecto incluye:

- `src/` - Código fuente de la aplicación Angular.
  - `app/` - Módulos, componentes y servicios principales.
    - `app.component.*` - Componente raíz.
    - `app.routes.ts` - Definición de rutas de la aplicación.
    - `app.config.ts`, `app.config.server.ts` - Configuración de la aplicación (p. ej. URL base del API).
    - `models/` - Modelos de datos (interfaces y tipos).
    - `services/` - Servicios Angular que encapsulan llamadas HTTP y lógica de negocio (por ejemplo `users.service.ts`).
    - `user/` - Componente(s) relacionados con la gestión de usuarios (`user.component.ts`, vistas y estilos).
- `assets/` - Recursos estáticos como imágenes y archivos.
- `main.ts` / `main.server.ts` - Entradas para client-side y server-side (si aplica SSR).
- `server.ts` - Archivo de servidor si se utiliza renderizado en servidor (opcional).
- `package.json` - Scripts y dependencias del proyecto.

## Funcionalidades principales

Lista de características implementadas o previstas en el frontend:

- Visualización de listas de usuarios.
- Componentes para ver y editar detalles de usuario.
- Servicios para comunicación con un API backend (consumo REST via HttpClient).
- Formularios con validación para creación/edición de usuarios.
- Estructura modular y desacoplada para facilitar pruebas y mantenimiento.

Si la aplicación incluye más funcionalidades (autenticación, paginación, búsqueda, etc.), se deben documentar aquí o en archivos específicos de la carpeta `docs/` si se añaden.

## Conexión con el backend o API

Los servicios Angular ubicados en `src/app/services` manejan la comunicación con el backend mediante `HttpClient`. Pautas generales para la integración:

- Configurar la URL base del API en `app.config.ts` o en una variable de entorno.
- Los servicios (por ejemplo `UsersService`) exponen métodos que realizan peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`) y retornan Observables.
- Manejar errores en los servicios y/o emplear interceptores HTTP para añadir cabeceras comunes (por ejemplo, token de autenticación) y gestionar respuestas globales.

Ejemplo (conceptual) en un servicio:

```ts
// users.service.ts
// constructor(private http: HttpClient) {}
// getUsers(): Observable<User[]> { return this.http.get<User[]>(`${API_BASE}/users`); }
```

## Pruebas

Este proyecto incluye pruebas unitarias básicas (si están presentes en `src/app/*.spec.ts`). Para ejecutar las pruebas:

```bash
npm test
# o
ng test
```

Si existen pruebas e2e, se pueden ejecutar con:

```bash
ng e2e
```

Si la configuración de pruebas no está presente o necesita ajustes, revise `tsconfig.spec.json` y `angular.json` para asegurar que los builders están definidos.

## Autor

Desarrollador: JNACHO2001

GitHub: https://github.com/JNACHO2001

Si quieres contribuir o reportar un problema, abre un issue o envía un pull request en el repositorio.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo `LICENSE` incluido en el repositorio para más detalles.

---

Notas adicionales:
- Ajusta la URL del repositorio en la sección de instalación si el repositorio remoto tiene otra ruta.
- Si este proyecto utiliza renderizado en servidor (SSR) o scripts adicionales, documenta los comandos específicos en esta guía.
