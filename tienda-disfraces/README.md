# Caritas Alegres - Catálogo de Disfraces

Sitio web oficial de **Caritas Alegres**, tu tienda de confianza para alquiler, confección y venta de disfraces.

## 📋 Descripción

Catálogo digital responsive con galería filtrable de disfraces para todas las ocasiones. Diseñado para ofrecer una experiencia óptima tanto en dispositivos móviles como en escritorio.

## 🚀 Características

- **Galería filtrable** por categorías y temporadas
- **Búsqueda en tiempo real** de disfraces
- **Diseño responsive** optimizado para móviles
- **Carga optimizada** con lazy loading de imágenes
- **Sin dependencias externas** - HTML/CSS/JS puro
- **Fácil mantenimiento** - datos en JSON

## 📁 Estructura del Proyecto

```
tienda-disfraces/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principales
│   └── responsive.css      # Media queries
├── js/
│   ├── app.js              # Lógica principal
│   ├── filters.js          # Sistema de filtros
│   └── data.js             # Carga de datos
├── data/
│   └── disfraces.json      # Catálogo de disfraces
├── images/
│   ├── disfraces/          # Fotos de disfraces
│   │   ├── halloween/
│   │   ├── carnaval/
│   │   ├── infantiles/
│   │   └── adultos/
│   └── logo/               # Logo y branding
├── docs/
│   ├── COMO_AGREGAR_DISFRAZ.md
│   └── OPTIMIZAR_IMAGENES.md
└── README.md               # Este archivo
```

## 🛠️ Instalación y Uso

### Opción 1: Uso Local

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/tienda-disfraces.git
cd tienda-disfraces
```

2. Abre `index.html` en tu navegador preferido

### Opción 2: GitHub Pages

1. Ve a Settings → Pages
2. En "Source" selecciona la rama `main`
3. Guarda y espera 1-2 minutos
4. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/tienda-disfraces`

## ✏️ Cómo Agregar un Disfraz

Edita el archivo `data/disfraces.json` y agrega un nuevo objeto:

```json
{
  "id": 999,
  "nombre": "Nombre del Disfraz",
  "descripcion": "Descripción detallada",
  "categoria": "halloween",
  "temporada": "otono",
  "precio_alquiler": "25.00",
  "precio_venta": "50.00",
  "tallas": ["S", "M", "L", "XL"],
  "disponible": true,
  "imagen": "images/disfraces/halloween/nombre-disfraz.webp",
  "imagen_thumb": "images/disfraces/halloween/thumbs/nombre-disfraz.webp"
}
```

Ver `docs/COMO_AGREGAR_DISFRAZ.md` para instrucciones detalladas.

## 🖼️ Optimización de Imágenes

Para mantener el repositorio ligero, sigue estas recomendaciones:

- **Formato:** WebP (mejor compresión)
- **Tamaño thumbnail:** 300x400px (~30-50KB)
- **Tamaño normal:** 800x1200px (~150-250KB)
- **Herramientas recomendadas:**
  - [Squoosh.app](https://squoosh.app) - Online
  - [TinyPNG](https://tinypng.com) - Online
  - ImageMagick - Línea de comandos

Ver `docs/OPTIMIZAR_IMAGENES.md` para el proceso completo.

## 🎨 Categorías Disponibles

- **Halloween** - Disfraces de terror y temática otoñal
- **Carnaval** - Disfraces coloridos y festivos
- **Infantiles** - Disfraces para niños y niñas
- **Superhéroes** - Personajes de cómics y películas
- **Princesas** - Vestidos de princesas y personajes de cuento
- **Animales** - Disfraces de fauna diversa
- **Profesiones** - Médicos, policías, bomberos, etc.
- **Época** - Disfraces históricos y vintage

## 🌐 Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## 📞 Contacto

**Caritas Alegres**
- 📱 Teléfono: 2890 291
- 📍 Ubicación: [Tu dirección aquí]
- ⏰ Horario: [Tu horario aquí]

## 📄 Licencia

Este proyecto es de uso privado para Caritas Alegres.

## 🤝 Contribuciones

Este es un proyecto privado. Para sugerencias o mejoras, contacta directamente con el equipo de Caritas Alegres.

---

**Última actualización:** Mayo 2026
**Versión:** 1.0.0
