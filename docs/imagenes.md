# Imágenes provisionales

`public/assets/images/food-preview.png` es una hoja generada mediante el **imagegen integrado** (sin API externa), con tres paneles: lechona completa, porción con acompañamientos y tamal. El CSS muestra cada panel por separado mediante `background-position`. Es un recurso temporal, no fotografía real del negocio; la página lo indica en el footer.

La marca vigente está en `public/assets/brand/`, con originales PNG transparentes en `output/brand/`. El antiguo `output/archive/public/assets/icons/paisa.svg` es un boceto archivado y ya no se utiliza. Consultar [la guía de marca en Markdown](guia-marca-el-paisa.md).

## Reemplazar por fotos reales

Guardar archivos separados en `public/assets/images/`, por ejemplo:

- `lechona-completa.webp`
- `porcion-lechona.webp`
- `tamal.webp`

En `public/assets/css/styles.css`, sustituir la regla `.food-photo` y las tres clases de posición por:

```css
.food-photo {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--sand);
}
.photo-whole {
  background-image: url("../images/lechona-completa.webp");
}
.photo-portion {
  background-image: url("../images/porcion-lechona.webp");
}
.photo-tamal {
  background-image: url("../images/tamal.webp");
}
```

Ajustar el encuadre individual con `background-position` cuando haga falta. Después retirar el archivo provisional, actualizar las descripciones `aria-label` de las fotografías y quitar el aviso del footer. Idealmente se migrarán a `<picture>`/`<img>` con tamaños responsive al tener los archivos finales; la hoja temporal mantiene el prototipo sencillo.

Para tomar las fotos: luz natural lateral, fondo limpio, plato servido tal como se entrega y tomas con margen alrededor del producto. La portada necesita un encuadre horizontal. Exportar WebP de aproximadamente 1200–1600 px y comprimir sin perder detalle.

## Prompt utilizado para generar la hoja

Create an asset contact sheet for a Colombian lechona restaurant website, THREE EXACTLY EQUAL SQUARE PANELS side by side, overall 3:1 aspect ratio high resolution. No borders, no gutters, no text, no logos, no graphic overlays. All panels natural elegant editorial food photography, warm diffuse daylight, warm ochre/cream background with soft depth of field. LEFT panel: full whole roasted Colombian stuffed lechona on serving tray with banana leaf, golden crackling skin, whole pig visible in three-quarter view, face at right, appetizing dignified, no exposed raw meat, framed with space around edges. CENTER panel: white ceramic plate filled with shredded roast pork and yellow peas and rice topped with a generous golden crisp pork skin piece; accompanied by distinct caramelized ripe plantain, one small white arepa and one boiled potato. Three-quarter overhead closeup, complete plate visible, warm wood tabletop. RIGHT panel: single authentic Colombian tamal de masa de maiz unwrapped in banana leaf, golden corn dough with a few visible pork pieces, served on ceramic plate, no pasta or noodles, complete tamal visible. The panels will be displayed independently using CSS background position, so each equal third must be a fully composed standalone square food photograph. Photorealistic, no people.

## Fotos de historia y ambiente

Ver [fotos-historia.md](fotos-historia.md) para los nuevos archivos, prompts y cómo sustituirlos por fotos reales.
