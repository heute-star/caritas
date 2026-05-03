# Guía de Contribución

¡Gracias por tu interés en mejorar el catálogo de Caritas Alegres!

## Cómo Contribuir

### Reportar Problemas

Si encuentras un error o tienes una sugerencia:

1. Ve a la pestaña **Issues** en GitHub
2. Click en **New Issue**
3. Describe claramente:
   - Qué esperabas que pasara
   - Qué pasó realmente
   - Pasos para reproducir el problema
   - Screenshots si es posible

### Proponer Cambios

1. **Fork** el repositorio
2. Crea una **rama nueva**:
   ```bash
   git checkout -b mejora/descripcion-corta
   ```
3. Haz tus cambios
4. Commit con mensaje descriptivo:
   ```bash
   git commit -m "Agregar: descripción del cambio"
   ```
5. Push a tu fork:
   ```bash
   git push origin mejora/descripcion-corta
   ```
6. Abre un **Pull Request** en GitHub

## Estándares de Código

### HTML
- Usa indentación de 4 espacios
- Cierra todas las etiquetas
- Usa atributos semánticos (`alt`, `aria-label`)

### CSS
- Organiza por secciones
- Usa nombres de clase descriptivos
- Mobile-first approach

### JavaScript
- Usa ES6+ features
- Comenta código complejo
- Nombres de variables en español y descriptivos
- Funciones documentadas con JSDoc

### JSON
- Formateado e indentado
- Valida en [JSONLint](https://jsonlint.com)
- Mantén el orden: id, nombre, descripción...

## Agregar Disfraces

Ver `docs/COMO_AGREGAR_DISFRAZ.md` para instrucciones detalladas.

## Estructura de Commits

Usa prefijos claros:

```
Agregar: nueva funcionalidad
Corregir: bug fix
Mejorar: optimización o mejora
Actualizar: cambio en contenido
Documentar: cambios en documentación
```

## Testing

Antes de hacer commit, verifica:

- [ ] El sitio funciona localmente
- [ ] No hay errores en la consola (F12)
- [ ] Funciona en móvil (responsive)
- [ ] Las imágenes cargan correctamente
- [ ] Los filtros funcionan

## Preguntas

¿Dudas? Abre un Issue con la etiqueta `pregunta`.

---

**Última actualización:** Mayo 2026
