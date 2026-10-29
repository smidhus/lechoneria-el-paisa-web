# Lechonería El Paisa - Guía de marca v1.0

Actualizada el 28 de octubre de 2026. Identidad digital de trabajo, basada en las selecciones del propietario. Fondo crema, lettering con remates y personaje aprobado sin sombrero ni pañoleta. La composición conjunta se adaptó mediante imagegen; puede tener pequeñas diferencias respecto de las referencias originales. No sustituye un original vectorial de imprenta.

## Vista de la marca

![Logo conjunto de Lechonería El Paisa](../output/brand/logo-el-paisa-derecha.svg)

## Idea y personalidad

Negocio familiar de Medellín, desde 2010. Voz cercana, hospitalaria, alegre y con voseo natural. El personaje evoca al padre del propietario: robusto, con bermuda y delantal, sonrisa abierta y mano que invita a pasar. Conservar orejas caídas, cuerpo compacto, tenis crema, manos de caricatura, camiseta amarilla, bermuda roja y delantal crema. No agregar sombrero, pañoleta, carriel o poncho a esta versión.

## Archivos de referencia

- `output/brand/logo-el-paisa.png`: composición conjunta transparente, 1942 x 809 px. Composición anterior conservada como fuente. Proporción 2.4005:1.
- `output/brand/letras-el-paisa.png`: lettering separado transparente, 1774 x 887 px. Proporción 2:1.
- `output/brand/personaje-el-paisa.png`: personaje separado transparente, 1024 x 1536 px. Proporción 2:3.
- `public/assets/brand/`: composición vigente en SVG con raster incrustado y favicon de cabeza en PNG (16, 32 y 48 px). Las variantes anteriores están archivadas fuera de la carpeta pública.
- `public/assets/brand/favicon-cara-16.png`, `favicon-cara-32.png` y `favicon-cara-48.png`: variante de cabeza con transparencia, preparada para pestañas claras y oscuras.
- `output/brand/prompts.md`: registro del proceso, no sustituto de los originales.

Los PNG son imágenes raster, no vectores. No ampliar un PNG para simular resolución. Los originales están en RGB con canal alfa; conservar el alfa al exportar. El fondo crema pertenece al soporte, no es un rectángulo dentro del logo.

## Recursos separados

![Letras de El Paisa](../output/brand/letras-el-paisa.png)

![Personaje de El Paisa](../output/brand/personaje-el-paisa.png)

## Tipografía y lettering

El logo es lettering personalizado generado a partir de las referencias elegidas, de estilo serif gruesa de remates suaves, curvas redondeadas y aire de rótulo familiar. No hay una fuente comercial identificada ni un archivo de fuente que reproduzca exactamente estas letras. No atribuirlo a una familia tipográfica concreta ni sustituirlo por una fuente similar sin rediseño aprobado.

Composición: «Lechonería» café arriba (siempre con tilde), «El Paisa» rojo en mayor tamaño, «DESDE 2010» pequeño debajo. Borde crema con contorno café. El PNG conjunto incluye un pequeño soporte crema detrás de la fecha; el archivo de letras separado deja la fecha directamente sobre transparencia. Son adaptaciones distintas: usar el conjunto completo sin mezclar versiones.

Para títulos de la web: Fraunces, pesos 700-800, eje SOFT 70 y WONK 0. Sus remates suaves acompañan el lettering sin sustituirlo. Archivo `public/assets/fonts/fraunces-variable.ttf`, licencia SIL OFL en `OFL-Fraunces.txt`. Fuente obtenida del repositorio oficial google/fonts, carpeta ofl/fraunces.

Para textos complementarios: Manrope, peso 400 para párrafos y 600-800 para botones, nombres y precios. Archivo local `public/assets/fonts/manrope-variable.ttf`, licencia SIL OFL en `OFL-Manrope.txt`. Esta es la tipografía de apoyo, NO la fuente del logo. No usar el lettering para listas de precios o textos largos.

## Paleta de referencia

Valores objetivo para nuevas piezas y futura vectorización. El arte generado tiene sombras y variaciones: no todos sus píxeles coinciden con estos HEX. Para reproducir el diseño actual, colocar el archivo; para uniformar tintas, usar esta paleta y aprobar una prueba.

| Color | HEX | RGB | Uso |
|---|---|---|---|
| Rojo de marca | #C83225 | 200, 50, 37 | El Paisa y acentos |
| Café de marca | #482719 | 72, 39, 25 | Lechonería y contornos |
| Crema claro | #FFF3DC | 255, 243, 220 | Fondo preferido y bordes |
| Amarillo camiseta | #ECAF27 | 236, 175, 39 | Personaje y acentos decorativos pequeños |
| Rosa piel | #F4AF91 | 244, 175, 145 | Personaje |
| Rosa hocico | #E7807E | 231, 128, 126 | Personaje |

La web utiliza crema #FFF3DC, rojo #C83225 y café #482719. Superficie de carta #FFF9ED, secciones secundarias #F6E6CA, texto secundario #705747 y rojo oscuro de interacción #A5231B. El PNG original se conserva. No se aprobó amarillo maíz como fondo de marca. Fondo preferido: crema liso. Evitar fotos de fondo sin área de descanso, texturas, gradientes y marcos añadidos.

No se fija un CMYK o Pantone universal: convertir desde RGB con el perfil ICC y el papel de la imprenta, y aprobar prueba física. No elegir un Pantone por equivalencia automática de pantalla.

## Proporción, espacio y tamaño

Usar archivos completos, sin estirar, comprimir ni inclinar. Tomar H como la altura total del logo; dejar al menos H/10 libre alrededor, adicional al margen incluido en el archivo. No superponer texto, fotografías ni bordes en esa zona.

Referencia digital: logo conjunto a 300 px de ancho en escritorio y 250 px en móvil. Evitar reducirlo por debajo de 240 px: la fecha pierde lectura. Si el espacio es menor, usar lettering separado y comprobar lectura; el avatar puede usar el personaje sin intentar incluir todo el nombre.

En impresión, probar la composición conjunta alrededor de 80 mm de ancho; es una referencia inicial, no un mínimo certificado. Imprimir al tamaño real y comprobar ojos, contornos y fecha. Para tarjetas pequeñas, preferir letras solas en una cara y datos de contacto en la otra. No compensar mala lectura agrandando la fecha dentro del PNG ni deformando el conjunto.

## Tarjetas e imprenta

Propuesta de tarjeta: 90 x 50 mm, fondo crema, lettering centrado al frente (aprox. 70-75 mm de ancho), información al reverso en Manrope 9-10 pt. Puede añadirse el personaje al reverso como un único acento. Confirmar tamaño y requisitos con el proveedor antes de producir. Mantener WhatsApp, dirección y nombre como texto editable; no copiarlos de una captura.

Sangrado orientativo de 3 mm y margen interno de 4 mm, sujetos a la imprenta. Si pide PDF/X, CMYK o tintas planas, preparar un arte final específico. Esta guía es un documento Markdown informativo, no una tarjeta lista para imprimir ni un PDF/X.

A 300 ppp, el ancho máximo de los PNG sin remuestreo es aproximadamente: conjunto 164 mm; letras 150 mm; personaje 87 mm. Cálculo: píxeles / 300 x 25.4. Esto no certifica la legibilidad del texto pequeño. Para fachada, bordado, corte de vinilo y gran formato: trazar manualmente el arte aprobado como curvas, revisar nodos y contraformas, simplificar sombras y generar SVG/PDF vectoriales. No envolver el PNG en un SVG y llamarlo vector.

## Usos que deben evitarse

No cambiar las letras rojas a blanco, añadir amarillo como fondo, recuperar sombrero o pañoleta, espejar al personaje, añadir sombras exteriores, separar arbitrariamente las letras, cambiar colores con filtros CSS o mezclar dibujos del cerdito. No insertar una versión monocroma improvisada: necesita simplificación y aprobación propias.

## Entrega y siguientes pasos

Paquete: tres PNG transparentes, WebP para web, favicon, fuentes Manrope y Fraunces con sus licencias, esta guía Markdown editable y prompts. El PNG conjunto manda para la aplicación combinada; los archivos separados permiten piezas donde solo se use un elemento. No regenerar la marca por IA cada vez que se necesite una tarjeta.

Pendientes para un sistema de producción definitivo: trazado vectorial, versión monocroma, pruebas de impresión al tamaño final y ajuste de color con la imprenta. Las fotografías de comida y ambiente de la web siguen siendo ilustrativas y no forman parte del logo.

## Composición web

Contenido de hasta 1.400 px con márgenes adaptables. Encabezado café con el logo transparente directamente sobre el fondo, portada en #FFF9ED, distribución 45/55 entre texto y foto en escritorio. La carta ocupa una franja crema #FFF3DC de ancho completo, con título café y superficie interior #FFF9ED para precios. Padding inferior de portada 24 px y superior de carta 30 px. En móvil se utiliza una columna y la foto queda debajo del texto.

Acentos web: amarillo #ECAF27 en un subrayado corto bajo «Escogé tu porción» y un separador pequeño en la sección familiar. El aviso de tamales mantiene fondo crema y punto rojo. Estos detalles son decorativos; no se usan como fondos de sección ni para transmitir información por sí solos.

## Composición aprobada: personaje a la derecha

El 28 de octubre se eligió el personaje a la derecha, acercado al lettering, sin reflejar ni redibujar los elementos. La composición vigente es `output/brand/logo-el-paisa-derecha.svg`; la versión web está en `public/assets/brand/logo-el-paisa-derecha.svg`. Ambos son contenedores SVG con imagen raster incrustada y recortes, no arte vectorial para imprenta. Conservan el dibujo y lettering del PNG conjunto original. Proporción de presentación: 1762 × 809.

## Archivos locales y despliegue

`output/` está excluido de Git y del despliegue: conservar copia externa de originales y kit. Los WebP separados de letras, personaje y composición anterior se archivaron en `output/archive/public/assets/brand/`. En `public/assets/brand/` quedan únicamente el logo vigente y el favicon que utiliza la web.

## Favicon de cabeza

Variante de tamaño pequeño generada con image_gen integrado a partir del personaje aprobado: solo cabeza, orejas, hocico y sonrisa, con contorno café y borde crema. No sustituye el logo principal. Exportaciones PNG de 16, 32 y 48 píxeles declaradas en el HTML. Original y prompt locales: `output/brand/favicon-cara-original.png` y `output/brand/favicon-cara-prompt.txt`. Comparativa a tamaño real: `output/previews/favicon-tamanos.png`.
