# Cómo Agregar un Disfraz al Catálogo

Esta guía te explica paso a paso cómo agregar un nuevo disfraz al catálogo de Caritas Alegres.

## Pasos Rápidos

1. Preparar la imagen del disfraz
2. Agregar entrada al archivo JSON
3. Subir cambios a GitHub

---

## 1. Preparar la Imagen del Disfraz

### Ubicación
Guarda las imágenes en: `images/disfraces/`

### Nombres de Archivo
Usa nombres descriptivos en minúsculas, sin espacios:
- ✅ Correcto: `vampiro-clasico.jpg`, `princesa-aurora.webp`
- ❌ Incorrecto: `IMG001.jpg`, `Mi Disfraz.png`

### Tamaños Recomendados

**Imagen principal:**
- Tamaño: 800x1200 píxeles (ratio 3:4)
- Peso: máximo 250KB
- Formato: JPG o WebP

**Thumbnail (miniatura):**
- Tamaño: 300x400 píxeles
- Peso: máximo 50KB
- Ubicación: `images/disfraces/thumbs/`
- Formato: JPG o WebP

### Herramientas de Optimización

**Online (gratis):**
- [Squoosh.app](https://squoosh.app) - Recomendado
- [TinyPNG](https://tinypng.com)
- [Compressor.io](https://compressor.io)

**Consejo:** Usa formato WebP para mejor compresión sin perder calidad.

---

## 2. Agregar Entrada al JSON

Abre el archivo `data/disfraces.json` y agrega un nuevo objeto:

```json
{
  "id": 16,
  "nombre": "Nombre del Disfraz",
  "descripcion": "Descripción detallada del disfraz, qué incluye, materiales, etc.",
  "categoria": "halloween",
  "temporada": "otono",
  "precio_alquiler": "25.00",
  "precio_venta": "65.00",
  "tallas": ["S", "M", "L", "XL"],
  "disponible": true,
  "imagen": "images/disfraces/nombre-disfraz.jpg",
  "imagen_thumb": "images/disfraces/thumbs/nombre-disfraz.jpg"
}
```

### Campos Explicados

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | número | Identificador único (usa el siguiente número disponible) | `16` |
| `nombre` | texto | Nombre del disfraz | `"Vampiro Clásico"` |
| `descripcion` | texto | Descripción completa | `"Disfraz completo de vampiro..."` |
| `categoria` | texto | Ver categorías disponibles abajo | `"halloween"` |
| `temporada` | texto | Ver temporadas disponibles abajo | `"otono"` |
| `precio_alquiler` | texto | Precio de alquiler (con 2 decimales) | `"25.00"` |
| `precio_venta` | texto | Precio de venta (con 2 decimales) | `"65.00"` |
| `tallas` | array | Lista de tallas disponibles | `["S", "M", "L"]` |
| `disponible` | booleano | Si está disponible o no | `true` o `false` |
| `imagen` | texto | Ruta de la imagen principal | `"images/disfraces/..."` |
| `imagen_thumb` | texto | Ruta de la miniatura | `"images/disfraces/thumbs/..."` |

### Categorías Disponibles

```
halloween       - Disfraces de terror y Halloween
carnaval        - Disfraces de carnaval y festivos
superheroes     - Superhéroes y personajes de acción
princesas       - Princesas y personajes de cuento
animales        - Disfraces de animales
profesiones     - Médicos, policías, bomberos, etc.
epoca           - Disfraces históricos y de época
infantiles      - Disfraces generales para niños
```

### Temporadas Disponibles

```
primavera       - Marzo a Mayo
verano          - Junio a Agosto
otono           - Septiembre a Noviembre
invierno        - Diciembre a Febrero
todo-el-ano     - Disponible cualquier época
```

### Tallas Comunes

**Adultos:**
```json
["S", "M", "L", "XL", "XXL"]
```

**Niños (por edad):**
```json
["4", "6", "8", "10", "12"]
```

**Talla única:**
```json
["Única"]
```

---

## 3. Ejemplo Completo

```json
{
  "id": 16,
  "nombre": "Batman Oscuro",
  "descripcion": "Disfraz completo de Batman con capa, máscara, cinturón de utilidades y símbolo del murciélago. Material de alta calidad con músculos moldeados.",
  "categoria": "superheroes",
  "temporada": "todo-el-ano",
  "precio_alquiler": "30.00",
  "precio_venta": "85.00",
  "tallas": ["S", "M", "L", "XL"],
  "disponible": true,
  "imagen": "images/disfraces/batman.jpg",
  "imagen_thumb": "images/disfraces/thumbs/batman.jpg"
}
```

**⚠️ Importante:**
- No olvides la coma (`,`) al final del objeto anterior
- El último objeto del array NO debe tener coma
- Verifica que el JSON sea válido usando [JSONLint](https://jsonlint.com)

---

## 4. Subir Cambios a GitHub

### Desde la Web de GitHub

1. Ve a tu repositorio en GitHub
2. Navega a `data/disfraces.json`
3. Click en el ícono de lápiz (Editar)
4. Pega tu nuevo disfraz en el array
5. Scroll abajo, escribe mensaje: "Agregar disfraz: [nombre]"
6. Click en "Commit changes"

### Desde la Terminal (Git)

```bash
# Agregar archivos
git add data/disfraces.json
git add images/disfraces/tu-imagen.jpg
git add images/disfraces/thumbs/tu-imagen.jpg

# Crear commit
git commit -m "Agregar disfraz: Nombre del Disfraz"

# Subir a GitHub
git push origin main
```

---

## 5. Verificar

1. Espera 1-2 minutos
2. Visita tu sitio web: `https://TU_USUARIO.github.io/tienda-disfraces`
3. Verifica que el disfraz aparezca correctamente
4. Prueba los filtros para asegurarte que funciona

---

## Solución de Problemas

### El disfraz no aparece
- Verifica que el JSON sea válido (sin errores de sintaxis)
- Asegúrate de que el `id` sea único
- Revisa que las rutas de las imágenes sean correctas

### Las imágenes no se ven
- Verifica que los nombres de archivo coincidan exactamente
- Las rutas son case-sensitive: `imagen.jpg` ≠ `Imagen.JPG`
- Asegúrate de haber subido las imágenes a GitHub

### Error en GitHub Pages
- Ve a Settings → Pages en tu repositorio
- Verifica que GitHub Pages esté activo
- Revisa el log de build para ver errores

---

## Consejos

✅ **Buenas prácticas:**
- Usa descripciones claras y completas
- Mantén los precios actualizados
- Optimiza las imágenes antes de subirlas
- Usa nombres de archivo descriptivos
- Marca como `disponible: false` si se alquiló

❌ **Evita:**
- Imágenes muy pesadas (+500KB)
- Caracteres especiales en nombres de archivo
- Olvidar actualizar la disponibilidad
- Duplicar IDs

---

## ¿Necesitas Ayuda?

Si tienes problemas, revisa:
1. La consola del navegador (F12) para ver errores
2. Que el JSON sea válido en [JSONLint](https://jsonlint.com)
3. Que las imágenes existan en la ruta correcta

---

**Última actualización:** Mayo 2026
