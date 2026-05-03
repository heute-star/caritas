# Guía de Optimización de Imágenes

Esta guía te ayudará a optimizar las imágenes de disfraces para mantener el repositorio ligero y el sitio web rápido.

## ¿Por Qué Optimizar?

- **GitHub tiene límites:** 100MB por archivo, 1GB por repositorio
- **Velocidad:** Imágenes pequeñas = sitio más rápido
- **Experiencia móvil:** Menos datos = mejor para usuarios con datos limitados
- **SEO:** Google prioriza sitios rápidos

---

## Tamaños Recomendados

### Imagen Principal
```
Dimensiones: 800 x 1200 píxeles (ratio 3:4)
Peso máximo: 250 KB
Formato: WebP o JPG
Calidad: 80-85%
```

### Thumbnail (miniatura)
```
Dimensiones: 300 x 400 píxeles
Peso máximo: 50 KB
Formato: WebP o JPG
Calidad: 75-80%
```

---

## Herramientas Recomendadas

### 1. Squoosh.app (Recomendado)

**URL:** https://squoosh.app

**Ventajas:**
- Gratis y sin registro
- Funciona en el navegador
- Comparación visual lado a lado
- Exporta en múltiples formatos

**Paso a paso:**
1. Arrastra tu imagen a Squoosh
2. En el panel derecho, selecciona "WebP" o "MozJPEG"
3. Ajusta calidad a 80-85%
4. Si es necesario, redimensiona en "Resize"
5. Compara visualmente (arrastra el divisor)
6. Descarga cuando estés satisfecho

### 2. TinyPNG

**URL:** https://tinypng.com

**Ventajas:**
- Muy fácil de usar
- Compresión inteligente
- Hasta 20 imágenes a la vez (5MB cada una)

**Paso a paso:**
1. Arrastra hasta 20 imágenes
2. Espera que se compriman automáticamente
3. Descarga individualmente o todas en ZIP

### 3. Compressor.io

**URL:** https://compressor.io

**Ventajas:**
- Compresión con o sin pérdida
- Soporta JPG, PNG, GIF, SVG

### 4. ImageMagick (Línea de comandos)

**Para usuarios avanzados**

**Instalar:**
```bash
# Ubuntu/Debian
sudo apt-get install imagemagick

# macOS
brew install imagemagick

# Windows
# Descargar desde: https://imagemagick.org/script/download.php
```

**Redimensionar:**
```bash
# Imagen principal (800x1200)
convert original.jpg -resize 800x1200 -quality 85 disfraz.jpg

# Thumbnail (300x400)
convert original.jpg -resize 300x400 -quality 80 thumbs/disfraz.jpg
```

**Convertir a WebP:**
```bash
convert disfraz.jpg -quality 85 disfraz.webp
```

**Batch (procesar múltiples):**
```bash
# Redimensionar todas las imágenes en un directorio
for img in *.jpg; do
  convert "$img" -resize 800x1200 -quality 85 "resized/$img"
done
```

---

## Formato de Imágenes

### WebP (Recomendado)

**Ventajas:**
- 25-35% más ligero que JPG
- Soportado por todos los navegadores modernos
- Excelente calidad

**Cuándo usar:** Siempre que sea posible

### JPG/JPEG

**Ventajas:**
- Compatible con todo
- Buena compresión para fotos

**Cuándo usar:** Si no puedes usar WebP

### PNG

**Ventajas:**
- Sin pérdida de calidad
- Soporta transparencia

**Cuándo usar:** Solo si necesitas fondo transparente

**❌ NO usar para fotos de disfraces** (muy pesado)

---

## Workflow Recomendado

### Opción 1: Online (Más Fácil)

```
1. Tomar foto del disfraz
2. Subir a Squoosh.app
3. Redimensionar a 800x1200
4. Calidad: 85%
5. Formato: WebP
6. Descargar
7. Repetir para thumbnail (300x400)
```

### Opción 2: Batch con ImageMagick

```bash
# Crear directorios
mkdir -p optimized/thumbs

# Procesar imagen principal
convert foto-original.jpg \
  -resize 800x1200 \
  -quality 85 \
  optimized/vampiro.webp

# Procesar thumbnail
convert foto-original.jpg \
  -resize 300x400 \
  -quality 80 \
  optimized/thumbs/vampiro.webp
```

---

## Checklist de Optimización

Antes de subir una imagen, verifica:

- [ ] Dimensiones correctas (800x1200 o 300x400)
- [ ] Peso menor al límite (250KB o 50KB)
- [ ] Formato WebP o JPG
- [ ] Nombre de archivo descriptivo y en minúsculas
- [ ] Sin espacios en el nombre (usa guiones)
- [ ] La imagen se ve bien (no muy pixelada)

---

## Consejos Fotográficos

### Iluminación
- Usa luz natural cuando sea posible
- Evita sombras duras
- Fondo claro y neutro

### Composición
- Centra el disfraz
- Deja espacio alrededor (para recortar)
- Ángulo frontal y completo

### Calidad
- Usa la mejor cámara disponible
- Enfoque nítido
- Sin flash directo (luz suave)

---

## Comparación de Tamaños

### Ejemplo: Disfraz de Vampiro

```
Original (iPhone 13):           3024 x 4032 px  →  3.2 MB
Optimizada (principal):          800 x 1200 px  →  180 KB  (-94%)
Optimizada (thumbnail):          300 x  400 px  →   35 KB  (-99%)
```

**Resultado:** De 3.2 MB a 180 KB = sitio 17 veces más rápido

---

## Alternativa: Usar URLs Externas

Si tienes muchas imágenes y te preocupa el tamaño del repositorio:

### Servicios de Hosting de Imágenes

**Imgur** (Gratis)
- Hasta 50 imágenes/día (cuenta gratuita)
- URL directa
- No caduca

**Cloudinary** (Gratis con límites)
- 25 GB de almacenamiento
- 25 GB de ancho de banda/mes
- Optimización automática

**Google Drive** (Si tienes cuenta)
- Compartir carpeta pública
- Obtener enlaces directos

### Cómo Usar URLs Externas

1. Sube la imagen a Imgur/Cloudinary
2. Obtén la URL directa
3. Úsala en el JSON:

```json
{
  "imagen": "https://i.imgur.com/abc123.jpg",
  "imagen_thumb": "https://i.imgur.com/abc123_thumb.jpg"
}
```

**Ventaja:** Repositorio muy ligero
**Desventaja:** Dependes de servicio externo

---

## Scripts de Automatización

### Script Bash para Optimización Masiva

Crea un archivo `optimize-images.sh`:

```bash
#!/bin/bash

# Crear directorios
mkdir -p optimized/thumbs

# Procesar todas las imágenes JPG
for img in *.jpg *.jpeg *.JPG *.JPEG; do
    if [ -f "$img" ]; then
        # Nombre sin extensión
        filename="${img%.*}"
        
        # Imagen principal
        convert "$img" \
            -resize 800x1200 \
            -quality 85 \
            "optimized/${filename}.webp"
        
        # Thumbnail
        convert "$img" \
            -resize 300x400 \
            -quality 80 \
            "optimized/thumbs/${filename}.webp"
        
        echo "✓ Procesado: $img"
    fi
done

echo "¡Listo! Imágenes en la carpeta 'optimized/'"
```

**Usar:**
```bash
chmod +x optimize-images.sh
./optimize-images.sh
```

---

## Troubleshooting

### La imagen se ve pixelada
→ Aumenta la calidad a 90%

### El archivo es muy pesado
→ Reduce calidad a 75% o usa WebP

### GitHub rechaza el push (archivo muy grande)
→ Verifica que no exceda 100MB
→ Usa Git LFS para archivos grandes (no recomendado para fotos)

### Las imágenes no se ven en el sitio
→ Verifica las rutas en el JSON
→ Asegúrate de haber subido las imágenes

---

## Recursos Adicionales

**Validadores de imágenes:**
- https://compressjpeg.com - Ver info de la imagen
- https://exif.regex.info - Ver metadatos

**Conversores:**
- https://convertio.co - Múltiples formatos
- https://cloudconvert.com - Batch conversion

**Aprender más:**
- [Guía de Google sobre optimización](https://developers.google.com/speed/docs/insights/OptimizeImages)
- [Can I Use WebP](https://caniuse.com/webp)

---

**Última actualización:** Mayo 2026

¿Necesitas ayuda? Revisa los ejemplos en `/images/disfraces/` para ver cómo deben verse las imágenes optimizadas.
