# 🎭 Caritas Alegres - Tienda de Disfraces

![Caritas Alegres](https://img.shields.io/badge/Caritas-Alegres-7B7AB8?style=for-the-badge)
![Estado](https://img.shields.io/badge/Estado-Activo-success?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)

**Sitio web profesional para alquiler, confección y venta de disfraces en Cuenca, Ecuador.**

🌐 **[Ver Sitio en Vivo](https://heute-star.github.io/caritas)**

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Agregar Disfraces](#-agregar-disfraces)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

Caritas Alegres es una tienda especializada en disfraces ubicada en Ricaurte, Cuenca, Ecuador. Este sitio web ofrece un catálogo completo de disfraces disponibles para alquiler y venta, con un sistema de gestión automatizado mediante Excel y GitHub Actions.

### ✨ Servicios

- 🎪 **Alquiler de Disfraces** - Amplio catálogo para todas las ocasiones
- ✂️ **Confección a Medida** - Diseños personalizados
- 🛍️ **Venta de Disfraces** - Compra tu favorito

---

## 🚀 Características

### Funcionalidades Principales

- ✅ **Catálogo Dinámico**: Visualización de disfraces con filtros avanzados
- ✅ **Gestión con Excel**: Sistema de inventario fácil de usar
- ✅ **Actualización Automática**: GitHub Actions convierte Excel a JSON automáticamente
- ✅ **Modal de Imágenes**: Vista ampliada al hacer click en cualquier disfraz
- ✅ **Galería Promocional**: Destacados de temporada (Halloween, Carnaval, Navidad)
- ✅ **Botones Flotantes**: Acceso rápido a llamada y catálogo
- ✅ **Diseño Responsive**: Perfecto en móvil, tablet y desktop
- ✅ **Mapa Integrado**: Google Maps con ubicación exacta
- ✅ **Búsqueda y Filtros**: Por categoría, edad y texto libre

### Categorías Disponibles

- 🎃 Halloween
- 🎅 Navidad  
- 🎭 Carnaval
- 🦸 Superhéroes
- 👸 Princesas
- 🦁 Animales
- 👨‍⚕️ Profesiones
- 🕰️ Época
- 👶 Infantiles

---

## 🛠️ Tecnologías

### Frontend
- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (ES6+)
- Google Maps API

### Backend/Automatización
- GitHub Pages (Hosting)
- GitHub Actions (CI/CD)
- Python 3.x (Conversión Excel → JSON)
- OpenPyXL (Procesamiento Excel)

### Diseño
- Sistema de diseño personalizado
- Colores: Amarillo (#E8DC5A) + Morado (#7B7AB8)
- Fuentes del sistema para mejor rendimiento
- Animaciones y transiciones suaves

---

## 📥 Instalación

### Opción 1: Usar el Sitio en Vivo

Simplemente visita: **[https://heute-star.github.io/caritas](https://heute-star.github.io/caritas)**

### Opción 2: Desarrollo Local

1. **Clona el repositorio**
```bash
git clone https://github.com/heute-star/caritas.git
cd caritas
```

2. **Abre con un servidor local**
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx http-server

# Opción 3: VS Code Live Server
# Instala la extensión y haz click derecho → "Open with Live Server"
```

3. **Accede en tu navegador**
```
http://localhost:8000
```

---

## 📖 Uso

### Para Visitantes

1. Navega a [https://heute-star.github.io/caritas](https://heute-star.github.io/caritas)
2. Explora el catálogo de disfraces
3. Usa los filtros para encontrar lo que buscas
4. Click en cualquier imagen para verla más grande
5. Llama al teléfono o visita la tienda para reservar

### Para Administradores

Ver sección [Agregar Disfraces](#-agregar-disfraces) más abajo.

---

## ➕ Agregar Disfraces

### Sistema Automatizado con Excel

#### Paso 1: Subir Fotos

1. Ve a tu repositorio en GitHub
2. Navega a `images/disfraces/`
3. Click **"Add file"** → **"Upload files"**
4. Arrastra tus fotos (formato: `nombre-disfraz.jpg`)
5. **Importante**: Nombres en minúsculas, sin espacios, con guiones
   - ✅ Correcto: `batman-azul.jpg`
   - ❌ Incorrecto: `Batman Azul.jpg`

#### Paso 2: Editar Excel

1. Descarga `inventario-disfraces.xlsx` del repositorio
2. Abre en Excel o Google Sheets
3. Agrega una nueva fila con:
   - **ID**: Número consecutivo (9, 10, 11...)
   - **Nombre del Archivo**: `batman-azul.jpg` (exacto)
   - **Nombre Completo**: `Disfraz de Batman Azul con Capa y Máscara`
   - **Categoría**: Selecciona del menú desplegable
   - **Edad**: `nino` o `adulto`
   - **Género**: `hombre`, `mujer`, `nina`, `nino`, o `unisex`

#### Paso 3: Subir Excel

1. Guarda el archivo Excel
2. Ve al repositorio en GitHub (raíz)
3. Arrastra el archivo para reemplazar el anterior
4. Click **"Commit changes"**

#### Paso 4: ¡Automático!

- GitHub Actions detecta el cambio
- Ejecuta el script Python
- Convierte Excel a JSON
- Actualiza el sitio en 1-2 minutos
- ✅ ¡Tu nuevo disfraz aparece en el sitio!

### Ejemplo de Registro en Excel

| ID | Nombre del Archivo | Nombre Completo del Disfraz | Categoría | Edad | Género |
|----|-------------------|----------------------------|-----------|------|--------|
| 9 | batman-azul.jpg | Disfraz de Batman Azul con Capa y Máscara | superheroes | nino | nino |

---

## 📁 Estructura del Proyecto

```
caritas/
├── .github/
│   └── workflows/
│       └── update-catalog.yml      # GitHub Action (Excel → JSON)
├── css/
│   ├── styles.css                  # Estilos principales
│   └── responsive.css              # Estilos móviles
├── data/
│   └── disfraces.json              # Catálogo (generado automáticamente)
├── images/
│   ├── disfraces/                  # Fotos de disfraces
│   └── placeholder.svg             # Imagen placeholder
├── js/
│   ├── app.js                      # Lógica principal
│   ├── data.js                     # Carga de datos
│   └── filters.js                  # Sistema de filtros
├── docs/                           # Documentación adicional
├── inventario-disfraces.xlsx       # Base de datos Excel
├── index.html                      # Página principal
└── README.md                       # Este archivo
```

---

## 🎨 Paleta de Colores

```css
--color-primary-yellow: #E8DC5A   /* Amarillo principal */
--color-primary-purple: #7B7AB8   /* Morado principal */
--color-lilac: #B8A8C9            /* Lila */
--color-accent-pink: #FF9AA2      /* Rosa acento */
```

---

## 🔧 Configuración del GitHub Action

El workflow se ejecuta automáticamente cuando:
- Se actualiza `inventario-disfraces.xlsx`
- Se ejecuta manualmente desde GitHub Actions

### Script Python (Automatizado)

```python
# Ubicación: .github/workflows/update-catalog.yml
# Lee: inventario-disfraces.xlsx
# Genera: data/disfraces.json
# Commit automático al repositorio
```

---

## 📞 Contacto

### Caritas Alegres

- 📍 **Dirección**: Ricaurte, Cuenca, Ecuador
- 📞 **Teléfono**: [+593 7-289-0291](tel:+593728900291)
- 🗺️ **Google Maps**: [Ver ubicación](https://maps.app.goo.gl/4HmJs9oj8TtmzxZcA)

### Horarios

- **Lunes a Viernes**: 9:00 - 18:00
- **Sábados**: 9:00 - 14:00
- **Domingos**: Cerrado

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el sitio:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- Diseño basado en los colores de marca de Caritas Alegres
- Sistema de gestión optimizado para facilidad de uso
- Comunidad de GitHub por las herramientas de CI/CD

---

## 📊 Estadísticas del Proyecto

![GitHub last commit](https://img.shields.io/github/last-commit/heute-star/caritas)
![GitHub repo size](https://img.shields.io/github/repo-size/heute-star/caritas)

---

## 🚀 Roadmap

- [ ] Implementar carrito de compras
- [ ] Sistema de reservas online
- [ ] Galería de fotos de eventos
- [ ] Blog de consejos de disfraces
- [ ] Integración con redes sociales
- [ ] Panel de administración web

---

**Desarrollado con ❤️ para Caritas Alegres, Cuenca - Ecuador**

🎭 *"¡Disfrazá!"*
