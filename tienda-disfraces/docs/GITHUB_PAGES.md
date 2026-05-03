# Guía de Inicio Rápido - GitHub Pages

## 🚀 Cómo Publicar tu Sitio en GitHub Pages

Sigue estos pasos para tener tu catálogo online en menos de 5 minutos.

---

## Paso 1: Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura:
   - **Repository name:** `tienda-disfraces` (o el nombre que prefieras)
   - **Description:** "Catálogo de Caritas Alegres"
   - **Public** ✓ (debe ser público para GitHub Pages gratis)
   - **NO** marques "Add a README file" (ya tienes uno)
4. Click en **"Create repository"**

---

## Paso 2: Subir el Código

### Opción A: Desde la Web (Más Fácil)

1. En tu nuevo repositorio, click en **"uploading an existing file"**
2. Arrastra TODA la carpeta del proyecto
3. Espera a que suban todos los archivos
4. Scroll abajo, escribe: "Primer commit - Sitio inicial"
5. Click en **"Commit changes"**

### Opción B: Usando Git (Recomendado)

**Si no tienes Git instalado:**
- Windows: Descarga desde [git-scm.com](https://git-scm.com)
- Mac: Ya viene instalado
- Linux: `sudo apt-get install git`

**Comandos:**

```bash
# Navega a la carpeta del proyecto
cd /ruta/a/tienda-disfraces

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Primer commit
git commit -m "Primer commit - Sitio inicial de Caritas Alegres"

# Conecta con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/tienda-disfraces.git

# Sube el código
git branch -M main
git push -u origin main
```

---

## Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (⚙️)
2. En el menú izquierdo, click en **Pages**
3. En "Source":
   - Branch: selecciona **main**
   - Folder: deja **/ (root)**
4. Click en **Save**
5. Espera 1-2 minutos

**¡Listo!** Tu sitio estará en:
```
https://TU_USUARIO.github.io/tienda-disfraces
```

---

## Paso 4: Verificar que Funciona

1. Abre la URL de tu sitio
2. Deberías ver la página de Caritas Alegres
3. Verifica que:
   - El menú funciona
   - Los filtros funcionan
   - Los disfraces se muestran

**Si ves "404 - Page not found":**
- Espera 2-3 minutos más
- Verifica que GitHub Pages esté activo en Settings → Pages
- Refresca la página (Ctrl+F5)

---

## Cómo Hacer Cambios

### Agregar/Editar desde GitHub Web

1. Navega al archivo que quieres editar
2. Click en el ícono de lápiz ✏️
3. Haz tus cambios
4. Scroll abajo → "Commit changes"
5. Espera 1-2 minutos → cambios en vivo

### Agregar/Editar desde Git Local

```bash
# Hacer cambios en tus archivos locales

# Ver qué cambió
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

**Los cambios aparecerán en tu sitio en 1-2 minutos**

---

## Usar un Dominio Personalizado (Opcional)

Si tienes tu propio dominio (ej: `caritasalegres.com`):

1. Ve a Settings → Pages
2. En "Custom domain" escribe tu dominio
3. Click "Save"
4. En tu proveedor de dominio, agrega estos DNS:

```
Tipo: A
Nombre: @
Valor: 185.199.108.153

Tipo: A
Nombre: @
Valor: 185.199.109.153

Tipo: A
Nombre: @
Valor: 185.199.110.153

Tipo: A
Nombre: @
Valor: 185.199.111.153

Tipo: CNAME
Nombre: www
Valor: TU_USUARIO.github.io
```

Espera 24-48 horas para que se propague.

---

## Estructura del Repositorio

```
tienda-disfraces/
├── index.html              ← Página principal
├── css/
│   ├── styles.css         ← Estilos principales
│   └── responsive.css     ← Responsive design
├── js/
│   ├── app.js            ← Lógica principal
│   ├── filters.js        ← Sistema de filtros
│   └── data.js           ← Gestión de datos
├── data/
│   └── disfraces.json    ← AQUÍ AGREGAS DISFRACES
├── images/
│   ├── disfraces/        ← Fotos de disfraces
│   └── placeholder.svg   ← Imagen por defecto
├── docs/
│   ├── COMO_AGREGAR_DISFRAZ.md
│   └── OPTIMIZAR_IMAGENES.md
├── README.md
├── LICENSE
└── .gitignore
```

---

## Comandos Git Útiles

```bash
# Ver estado actual
git status

# Ver historial de commits
git log --oneline

# Deshacer cambios no guardados
git checkout -- archivo.html

# Crear una rama nueva
git checkout -b nueva-funcionalidad

# Volver a la rama principal
git checkout main

# Actualizar tu copia local
git pull

# Ver diferencias
git diff
```

---

## Solución de Problemas

### El sitio no se actualiza después de hacer cambios

1. Verifica que hiciste `git push` correctamente
2. Ve a Settings → Pages y verifica el status
3. Espera 2-3 minutos
4. Limpia cache del navegador (Ctrl+Shift+R)

### Error "remote: Permission denied"

- Verifica que estés usando tu usuario correcto
- Puede que necesites configurar SSH keys

### Los disfraces no aparecen

- Verifica que `data/disfraces.json` sea válido
- Abre la consola del navegador (F12) y busca errores
- Asegúrate de haber subido el archivo JSON

### Las imágenes no se ven

- Verifica que las rutas en el JSON sean correctas
- Las rutas son case-sensitive
- Asegúrate de haber subido las imágenes a GitHub

---

## Consejos de Seguridad

✅ **Haz:**
- Commits frecuentes con mensajes descriptivos
- Backups regulares
- Prueba localmente antes de subir

❌ **No hagas:**
- Subir contraseñas o datos sensibles
- Commit de archivos muy grandes (>100MB)
- Push directo a main sin revisar

---

## Recursos Adicionales

**Documentación:**
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

**Tutoriales:**
- [GitHub Learning Lab](https://lab.github.com/)
- [Pro Git Book (Español)](https://git-scm.com/book/es/v2)

---

## Soporte

¿Problemas? Revisa:
1. [GitHub Status](https://www.githubstatus.com/) - Ver si hay problemas con GitHub
2. Consola del navegador (F12) - Ver errores de JavaScript
3. README.md - Documentación completa del proyecto

---

**¡Tu catálogo está listo para el mundo! 🎉**

**URL de tu sitio:** `https://TU_USUARIO.github.io/tienda-disfraces`

---

**Última actualización:** Mayo 2026
