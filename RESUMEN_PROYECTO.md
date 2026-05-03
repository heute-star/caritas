# Repositorio Caritas Alegres - Resumen del Proyecto

## 📦 Contenido Completo

Este repositorio contiene un sitio web profesional y completo para el catálogo de disfraces de **Caritas Alegres**.

---

## 🎯 Características Principales

✅ **HTML/CSS/JavaScript puro** - Sin dependencias, sin compilaciones
✅ **100% Responsive** - Optimizado para móviles y tablets
✅ **GitHub Pages Ready** - Listo para publicar gratis
✅ **Galería filtrable** - Por categoría, temporada y disponibilidad
✅ **Búsqueda en tiempo real** - Encuentra disfraces al instante
✅ **Fácil mantenimiento** - Agrega disfraces editando JSON
✅ **Optimizado** - Carga rápida con lazy loading
✅ **Documentación completa** - Guías paso a paso en español

---

## 📁 Estructura del Proyecto

```
tienda-disfraces/
│
├── 📄 index.html                    # Página principal del sitio
├── 📄 README.md                     # Documentación principal
├── 📄 LICENSE                       # Licencia MIT
├── 📄 CONTRIBUTING.md               # Guía de contribución
├── 📄 .gitignore                    # Archivos a ignorar en Git
│
├── 📁 css/
│   ├── styles.css                   # Estilos principales (colores de marca)
│   └── responsive.css               # Diseño responsive
│
├── 📁 js/
│   ├── app.js                       # Lógica principal de la aplicación
│   ├── filters.js                   # Sistema de filtros y búsqueda
│   └── data.js                      # Gestión de datos de disfraces
│
├── 📁 data/
│   └── disfraces.json              # ⭐ CATÁLOGO DE DISFRACES (15 ejemplos)
│
├── 📁 images/
│   ├── disfraces/                   # Fotos de disfraces (vacío, listo para agregar)
│   └── placeholder.svg              # Imagen por defecto
│
└── 📁 docs/
    ├── COMO_AGREGAR_DISFRAZ.md     # Guía: agregar nuevos disfraces
    ├── OPTIMIZAR_IMAGENES.md        # Guía: optimizar fotos
    └── GITHUB_PAGES.md              # Guía: publicar en GitHub Pages
```

**Total:** 15 archivos profesionales listos para usar

---

## 🎨 Diseño y Branding

### Colores (basados en el letrero de Caritas Alegres)

```
Amarillo Principal:  #E8DC5A  (fondo del letrero)
Morado Principal:    #7B7AB8  (texto "caritas alegres")
Lila Claro:          #B8A8C9  (detalles)
```

### Características Visuales

- Diseño limpio y profesional (sin emojis)
- Cards de disfraces con hover effects
- Filtros interactivos
- Badges de disponibilidad
- Imágenes con lazy loading
- Animaciones sutiles

---

## 🚀 Cómo Publicar (3 pasos)

### 1. Crear Repositorio en GitHub
```
Nombre: tienda-disfraces
Visibilidad: Public
```

### 2. Subir Archivos
```bash
git init
git add .
git commit -m "Primer commit - Catálogo Caritas Alegres"
git remote add origin https://github.com/TU_USUARIO/tienda-disfraces.git
git push -u origin main
```

### 3. Activar GitHub Pages
```
Settings → Pages → Source: main → Save
```

**¡Listo!** Tu sitio estará en: `https://TU_USUARIO.github.io/tienda-disfraces`

Ver `docs/GITHUB_PAGES.md` para guía detallada.

---

## 💡 Cómo Agregar un Disfraz

1. **Optimiza la foto** (ver `docs/OPTIMIZAR_IMAGENES.md`)
2. **Súbela a** `images/disfraces/`
3. **Edita** `data/disfraces.json`:

```json
{
  "id": 16,
  "nombre": "Tu Disfraz",
  "descripcion": "Descripción completa...",
  "categoria": "halloween",
  "temporada": "otono",
  "precio_alquiler": "25.00",
  "precio_venta": "65.00",
  "tallas": ["S", "M", "L"],
  "disponible": true,
  "imagen": "images/disfraces/tu-disfraz.jpg",
  "imagen_thumb": "images/disfraces/thumbs/tu-disfraz.jpg"
}
```

4. **Sube a GitHub** → Cambios en vivo en 1-2 minutos

Ver `docs/COMO_AGREGAR_DISFRAZ.md` para guía completa.

---

## 📱 Funcionalidades

### Para Visitantes del Sitio

- ✅ Ver catálogo completo de disfraces
- ✅ Filtrar por categoría (Halloween, Carnaval, Superhéroes, etc.)
- ✅ Filtrar por temporada (Otoño, Invierno, Todo el año, etc.)
- ✅ Filtrar por disponibilidad
- ✅ Búsqueda en tiempo real
- ✅ Ver precios de alquiler y venta
- ✅ Ver tallas disponibles
- ✅ Contacto directo por teléfono
- ✅ Experiencia perfecta en móvil

### Para Administradores

- ✅ Agregar disfraces sin tocar código (solo JSON)
- ✅ Actualizar disponibilidad fácilmente
- ✅ Cambiar precios al instante
- ✅ Gestionar categorías y temporadas
- ✅ Ver estadísticas en GitHub (visitas, etc.)

---

## 📊 Datos de Ejemplo Incluidos

El archivo `data/disfraces.json` incluye **15 disfraces de ejemplo**:

### Por Categoría
- Halloween: 3 disfraces (Vampiro, Bruja, Catrina)
- Carnaval: 2 disfraces (Arlequín, Payaso)
- Superhéroes: 2 disfraces (Spider-Man, Wonder Woman)
- Princesas: 2 disfraces (Aurora, Elsa)
- Animales: 2 disfraces (Dinosaurio, Unicornio)
- Profesiones: 2 disfraces (Doctora, Policía)
- Época: 1 disfraz (Caballero Medieval)
- Infantiles: 1 disfraz (Pirata)

### Por Disponibilidad
- Disponibles: 13
- No disponibles: 2 (Spider-Man, Elsa)

Estos ejemplos sirven para:
- Demostración del catálogo
- Referencia de cómo agregar nuevos
- Testing de filtros y búsqueda

**Puedes editarlos o eliminarlos** según tus disfraces reales.

---

## 🔧 Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Grid, Flexbox
- **JavaScript ES6+** - Funciones modernas, async/await
- **JSON** - Almacenamiento de datos
- **SVG** - Iconos y placeholder

**Sin frameworks** - Código limpio y mantenible

---

## 📚 Documentación Incluida

Todas las guías están en español y paso a paso:

1. **README.md** - Visión general del proyecto
2. **GITHUB_PAGES.md** - Cómo publicar el sitio
3. **COMO_AGREGAR_DISFRAZ.md** - Agregar disfraces al catálogo
4. **OPTIMIZAR_IMAGENES.md** - Reducir peso de fotos
5. **CONTRIBUTING.md** - Cómo colaborar

---

## 🎯 Próximos Pasos Recomendados

### Inmediatos (Hoy)
1. ✅ Subir repositorio a GitHub
2. ✅ Activar GitHub Pages
3. ✅ Verificar que el sitio funciona
4. ✅ Compartir URL con clientes

### Corto Plazo (Esta Semana)
1. 📸 Tomar fotos de tus disfraces reales
2. 🖼️ Optimizar imágenes (ver guía)
3. ✏️ Editar `disfraces.json` con tu inventario
4. 📝 Actualizar información de contacto

### Mediano Plazo (Este Mes)
1. 🎨 Personalizar colores si lo deseas
2. 📱 Agregar WhatsApp Business
3. 📊 Configurar Google Analytics (opcional)
4. 🔍 Mejorar SEO con meta tags

### Largo Plazo (Futuro)
1. 💰 Agregar sistema de reservas online
2. 💳 Integrar pagos (si decides vender online)
3. 📧 Newsletter para clientes
4. ⭐ Sistema de reviews/reseñas

---

## ✅ Checklist de Implementación

```
□ Crear repositorio en GitHub
□ Subir todos los archivos
□ Activar GitHub Pages
□ Verificar que el sitio funciona
□ Actualizar README con tu información
□ Cambiar número de teléfono en index.html
□ Agregar dirección real de la tienda
□ Tomar fotos de disfraces
□ Optimizar imágenes
□ Actualizar data/disfraces.json
□ Probar en móvil
□ Compartir URL con clientes
```

---

## 📞 Información a Personalizar

Busca y reemplaza en `index.html`:

```html
<!-- Línea ~154 -->
<p><a href="tel:2890291">2890 291</a></p>

<!-- Línea ~157 -->
<p>[Dirección de la tienda]</p>

<!-- Líneas ~160-161 -->
<p>Lunes a Viernes: 9:00 - 19:00</p>
<p>Sábados: 9:00 - 14:00</p>
```

---

## 🌟 Ventajas de Este Sistema

### Para Caritas Alegres
- ✅ Presencia online profesional 24/7
- ✅ Catálogo siempre actualizado
- ✅ Clientes pueden ver disponibilidad
- ✅ Reduce llamadas repetitivas
- ✅ Imagen moderna y profesional

### Para los Clientes
- ✅ Ver disfraces desde casa
- ✅ Filtrar por lo que necesitan
- ✅ Ver precios de inmediato
- ✅ Contacto rápido
- ✅ Funciona en cualquier dispositivo

### Técnicas
- ✅ 100% gratis (GitHub Pages)
- ✅ Sin mantenimiento de servidor
- ✅ Actualizaciones instantáneas
- ✅ Código simple y mantenible
- ✅ Escalable (puedes crecer)

---

## 💻 Requisitos Técnicos

**Para publicar:**
- Cuenta de GitHub (gratis)
- Navegador web
- Conexión a internet

**Para mantener:**
- Editor de texto (Notepad++, VS Code, o el mismo GitHub)
- Conocimientos básicos de JSON (muy simple)
- Herramienta de optimización de imágenes (online gratis)

**NO necesitas:**
- ❌ Servidor propio
- ❌ Base de datos
- ❌ Saber programar
- ❌ Pagar hosting

---

## 🔒 Seguridad y Privacidad

- ✅ Código público pero NO incluye datos sensibles
- ✅ Sin base de datos de clientes
- ✅ Sin formularios de contacto (para evitar spam)
- ✅ Teléfono visible pero no clickeable en desktop
- ✅ GitHub Pages con HTTPS automático

---

## 📈 Métricas y Analytics (Opcional)

Puedes agregar Google Analytics para saber:
- Cuántas personas visitan
- Qué disfraces son más vistos
- De dónde vienen (Facebook, Google, etc.)
- Qué dispositivos usan

Esto NO está incluido por defecto para mantenerlo simple.

---

## 🎓 Recursos de Aprendizaje

Si quieres aprender más:

- **Git y GitHub:** [GitHub Learning Lab](https://lab.github.com/)
- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Optimización Web:** [Web.dev](https://web.dev/)

---

## 🤝 Soporte

Este es un proyecto completo y documentado. Si tienes dudas:

1. Lee la documentación en `docs/`
2. Revisa ejemplos en el código
3. Usa la consola del navegador (F12) para debug
4. Busca en Google (muchos recursos disponibles)

---

## 📄 Licencia

**MIT License** - Puedes usar, modificar y distribuir libremente.

Ver archivo `LICENSE` para detalles completos.

---

## ✨ Créditos

**Desarrollado para:** Caritas Alegres
**Tecnología:** HTML5, CSS3, JavaScript ES6
**Hosting:** GitHub Pages
**Fecha:** Mayo 2026

---

## 🎉 ¡A Vender Disfraces!

Tu catálogo digital está listo. Solo falta:

1. Subirlo a GitHub
2. Activar Pages
3. Agregar tus fotos
4. ¡Compartir con tus clientes!

**¡Éxito con Caritas Alegres!** 🎭

---

**Versión:** 1.0.0  
**Última actualización:** Mayo 2026
