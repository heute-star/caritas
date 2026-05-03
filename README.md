# Caritas Alegres - Catálogo de Disfraces

Sitio web oficial de **Caritas Alegres**, tu tienda de confianza para alquiler, confección y venta de disfraces en Ricaurte, Cuenca, Ecuador.

## 📋 Descripción

Catálogo digital responsive y divertido con galería filtrable de disfraces para todas las ocasiones. Diseñado especialmente para ofrecer una experiencia alegre y fácil tanto en dispositivos móviles como en escritorio.

## 🎨 Nuevo en la Versión 2

- ✨ Logo de carita alegre personalizado
- 🎪 Galería promocional con 3 temporadas destacadas (Halloween, Carnaval, Navidad)
- 📞 Botones flotantes para llamar y ver catálogo
- 🗺️ Mapa de Google Maps integrado con la ubicación exacta
- 🎭 Diseño más divertido y colorido
- 🎅 Categoría de Navidad agregada
- 👶 Filtro por edad (Niños / Adultos)
- 🚫 Sin mostrar precios (solo información de disfraces)
- 🗂️ Filtros simplificados (categoría y edad solamente)

## 🚀 Características

- **Galería filtrable** por categoría y edad
- **Búsqueda en tiempo real** de disfraces
- **Diseño responsive** optimizado para móviles
- **Botones flotantes** para acción rápida
- **Mapa integrado** para encontrar la tienda fácilmente
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
│   └── disfraces.json      # Catálogo de disfraces (20 ejemplos)
├── images/
│   ├── logo-caritas-alegres.svg    # Logo oficial
│   ├── disfraces/          # Fotos de disfraces
│   └── placeholder.svg     # Imagen por defecto
├── docs/
│   ├── COMO_AGREGAR_DISFRAZ.md
│   └── OPTIMIZAR_IMAGENES.md
└── README.md               # Este archivo
```

## 🛠️ Instalación y Uso

### GitHub Pages (Gratis)

1. Sube los archivos a tu repositorio de GitHub
2. Ve a Settings → Pages
3. En "Source" selecciona la rama `main`
4. ¡Listo! Tu sitio estará en: `https://TU_USUARIO.github.io/TU_REPO`

## ✏️ Cómo Agregar un Disfraz

Edita el archivo `data/disfraces.json` y agrega:

```json
{
  "id": 21,
  "nombre": "Nombre del Disfraz",
  "descripcion": "Descripción completa...",
  "categoria": "halloween",
  "edad": "nino",
  "tallas": ["S", "M", "L"],
  "imagen": "images/disfraces/nombre.jpg",
  "imagen_thumb": "images/disfraces/thumbs/nombre.jpg"
}
```

Ver `docs/COMO_AGREGAR_DISFRAZ.md` para instrucciones detalladas.

## 🎨 Categorías Disponibles

- **Halloween** - Disfraces de terror
- **Navidad** - Papá Noel, elfos, renos, ángeles
- **Carnaval** - Disfraces coloridos y festivos
- **Superhéroes** - Personajes de acción
- **Princesas** - Personajes de cuento
- **Animales** - Fauna diversa
- **Profesiones** - Médicos, policías, etc.
- **Época** - Disfraces históricos
- **Infantiles** - Disfraces generales para niños

## 📞 Contacto

**Caritas Alegres**
- 📱 Teléfono: +593 7-289-0291
- 📍 Dirección: 42PM+JVR, Antonio Ricaurte, S/N, Ricaurte, 010205, Cuenca, Ecuador
- ⏰ Horario: Lunes a Viernes 9:00-18:00, Sábados 9:00-14:00

## 📄 Licencia

Este proyecto es de uso privado para Caritas Alegres.

---

**Última actualización:** Mayo 2026  
**Versión:** 2.0.0
