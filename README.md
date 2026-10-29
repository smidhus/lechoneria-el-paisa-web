# Lechonería El Paisa

Primera versión de la carta digital: HTML y CSS, sin framework ni dependencias npm. La carta y los enlaces funcionan sin JavaScript. Un script pequeño carga la entrevista de YouTube al pulsar; su miniatura se sirve desde YouTube.

## Ver en local

Requiere Node.js 20.12 o superior:

```sh
npm run dev
```

Abrir http://localhost:3000. Para otro puerto: `PORT=3001 npm run dev`.
No hace falta `npm install`. Refrescar el navegador para ver los cambios.
El servidor solo expone `public/` y escucha en el equipo local.

## Estructura

```text
public/                   # Única carpeta que se publica
  index.html              # Contenido, precios, enlaces y metadatos
  assets/
    css/styles.css        # Variables de marca y estilos responsive
    images/food-preview.png # Fotos provisionales generadas
    brand/                # Logo vigente y favicon
    fonts/                # Manrope, Fraunces y sus licencias OFL
    js/interview.js       # Reproductor de YouTube bajo demanda
scripts/serve.mjs         # Servidor de desarrollo, sin dependencias
docs/imagenes.md          # Sustituir las fotografías
docs/pendientes.md        # Datos y elementos por confirmar
vercel.json               # Publicación estática de public/
```

## Cambiar precios

Editar `public/index.html`: buscar el comentario `PRECIOS` y cambiar el importe en el `<dd>` de cada presentación. El tamal se edita en el elemento `class="tamal-price"`. Cada precio tiene una única fuente en el HTML; no hay una segunda copia en JavaScript o JSON.

Comprobar el resultado en celular y escritorio, hacer commit y push. Una vez conectado el repositorio, Vercel desplegará la rama de producción. Repositorio: https://github.com/smidhus/lechoneria-el-paisa-web. La conexión y publicación en Vercel están pendientes. Revertir el commit permite recuperar precios anteriores.

## Vercel

Importar el repositorio, seleccionar el preset **Other**, dejar sin comando de build y usar **public** como Output Directory. `vercel.json` ya declara la salida estática. No se necesita paso de instalación. El uso comercial requiere un plan de Vercel compatible con sus condiciones.

## Contenido y funcionamiento

- Cinco presentaciones de lechona y un tamal: tamaños y precios transcritos del aviso del usuario.
- Dos enlaces a WhatsApp con mensaje prellenado; un enlace a Google Maps. No se envían mensajes automáticamente.
- Fotografías generadas mediante imagegen integrado y marca raster documentada: sustituir por los recursos definitivos.
- HTML semántico, idioma es-CO, etiquetas descriptivas, foco visible, enlace para saltar al contenido y soporte de movimiento reducido.
- No publicar secretos, archivos .env o credenciales en el repositorio.

## Validación inicial

Revisado en navegador a 1440, 390 y 320 px: precios, dos enlaces a WhatsApp, recursos locales y ausencia de desbordamiento horizontal. Auditoría automatizada WCAG A/AA con axe; la auditoría automática no reemplaza una revisión completa de accesibilidad.

## Tipografía y composición

Fraunces variable para títulos (peso 700–800, SOFT 70, WONK 0) y Manrope para párrafos, precios y botones. Ambas alojadas en `public/assets/fonts/`, con licencias SIL OFL incluidas. Fondo crema #FFF3DC, rojo #C83225 y café #482719, alineados con la marca. Carta agrupada sobre fondo crema de ancho completo, portada en crema claro con columnas 45/55 y contenido de hasta 1.400 px. Separación portada/carta reducida a 54 px de padding combinado. Encabezado de 132 px en escritorio, foto principal sin degradado y footer café oscuro.



## Historia y fotografías

La sección de reseñas y su integración con Google/Redis se retiraron. No se necesitan claves ni caché. La entrevista real se carga solo al pulsar el botón; permanece un enlace alternativo a YouTube. Las imágenes generadas de ambiente y eventos llevan avisos de muestra y se reemplazan siguiendo `docs/fotos-historia.md`.

## Identidad de marca

Logo transparente integrado en el encabezado. Archivos originales PNG en `output/brand/`, composición vigente y favicon en `public/assets/brand/`, guía de marca en [Markdown](docs/guia-marca-el-paisa.md). El lettering es personalizado, no una fuente instalable. Para gran formato falta el trazado vectorial.

## Qué se versiona y qué se despliega

- Git: `public/`, `scripts/`, `docs/`, `package.json`, `vercel.json`, `.gitignore`, `.vercelignore` y este README.
- Vercel: únicamente `public/` se sirve a los visitantes, según `outputDirectory`. `.gitignore` controla Git; `.vercelignore` excluye material local al desplegar mediante la CLI.
- Material local excluido: `output/` (originales, kit de marca, fachadas y pruebas), `tmp/` (temporales), `.local/` (capturas) y `node_modules/`. Conservar una copia externa de los originales: Git no los respaldará.
- Recursos antiguos retirados de `public/` se conservan en `output/archive/public/`. No son necesarios para ejecutar ni desplegar la web.
- Los enlaces de documentación a `output/` son referencias locales; esos archivos no estarán en GitHub. Las fuentes y sus licencias sí permanecen en el repositorio.

No hay dependencias npm, funciones API ni integración de reseñas activa. No hace falta instalar paquetes ni configurar secretos para este sitio.

## Despliegues automáticos desde GitHub

Importar `smidhus/lechoneria-el-paisa-web` en Vercel, con raíz del proyecto en el repositorio, preset Other y rama de producción `main`. El archivo `vercel.json` fija `public/` como salida y omite instalación y build: no hay dependencias ni compilación.

La integración Git de Vercel despliega automáticamente cada push a `main` en producción; otras ramas generan previews según la configuración del proyecto. Guardar cambios localmente no despliega: hacer commit y push. No requiere workflow de GitHub Actions ni secretos de despliegue en GitHub.

Estado al 28 de octubre de 2026: el propietario tiene Hobby; el despliegue comercial queda pendiente de un plan compatible. No se ha activado un plan de pago.
