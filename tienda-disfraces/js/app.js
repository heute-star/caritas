// ===================================
// Main Application Logic
// ===================================

/**
 * Renderiza una tarjeta de disfraz
 */
function createCostumeCard(costume) {
    const card = document.createElement('div');
    card.className = 'costume-card';
    card.setAttribute('data-id', costume.id);
    
    // Imagen con fallback
    const imageSrc = costume.imagen || 'images/placeholder.jpg';
    const imageThumb = costume.imagen_thumb || imageSrc;
    
    card.innerHTML = `
        <div class="costume-image">
            <img 
                src="${imageThumb}" 
                alt="${costume.nombre}"
                loading="lazy"
                onerror="this.src='images/placeholder.jpg'"
            >
            <span class="costume-badge ${!costume.disponible ? 'not-available' : ''}">
                ${costume.disponible ? 'Disponible' : 'No disponible'}
            </span>
        </div>
        <div class="costume-info">
            <div class="costume-category">${getCategoryName(costume.categoria)}</div>
            <h3 class="costume-name">${costume.nombre}</h3>
            <p class="costume-description">${costume.descripcion}</p>
            
            <div class="costume-details">
                <div class="costume-detail">
                    <span>Temporada:</span>
                    <span>${getSeasonName(costume.temporada)}</span>
                </div>
            </div>
            
            <div class="costume-sizes">
                ${costume.tallas.map(talla => `<span class="size-badge">${talla}</span>`).join('')}
            </div>
            
            <div class="costume-prices">
                <div class="price-item">
                    <span class="price-label">Alquiler</span>
                    <span class="price-value">$${costume.precio_alquiler}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">Venta</span>
                    <span class="price-value">$${costume.precio_venta}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Renderiza todos los disfraces filtrados
 */
function renderCostumes() {
    const costumesGrid = document.getElementById('costumes-grid');
    const loading = document.getElementById('loading');
    
    if (!costumesGrid) return;
    
    // Ocultar loading
    if (loading) {
        loading.style.display = 'none';
    }
    
    // Limpiar grid
    costumesGrid.innerHTML = '';
    
    // Verificar si hay resultados
    if (filteredCostumes.length === 0) {
        toggleNoResults(true);
        updateResultsCount(0);
        return;
    }
    
    toggleNoResults(false);
    
    // Ordenar disfraces (disponibles primero)
    const sorted = sortCostumes(filteredCostumes, 'disponibilidad');
    
    // Crear y agregar tarjetas
    const fragment = document.createDocumentFragment();
    sorted.forEach(costume => {
        const card = createCostumeCard(costume);
        fragment.appendChild(card);
    });
    
    costumesGrid.appendChild(fragment);
    
    // Actualizar contador
    updateResultsCount(filteredCostumes.length);
    
    // Lazy loading de imágenes
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }
}

/**
 * Implementa lazy loading para las imágenes
 */
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('.costume-image img[loading="lazy"]');
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Inicializa el menú móvil
 */
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Cerrar menú al hacer click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Inicializa smooth scroll para los enlaces internos
 */
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces vacíos o solo con #
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Crea un placeholder para imágenes que no cargan
 */
function createPlaceholderImage() {
    // Crear imagen SVG placeholder si no existe
    const placeholderDir = 'images';
    
    // Esta función puede expandirse para generar placeholders dinámicos
    // Por ahora, las imágenes que fallen mostrarán el placeholder.jpg
}

/**
 * Maneja errores globales de carga de imágenes
 */
function handleImageErrors() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'images/placeholder.jpg';
        }
    }, true);
}

/**
 * Inicializa la aplicación
 */
async function initializeApp() {
    console.log('Inicializando Caritas Alegres...');
    
    // Cargar datos
    await loadCostumesData();
    
    // Inicializar componentes
    initializeFilters();
    initializeMobileMenu();
    initializeSmoothScroll();
    handleImageErrors();
    
    // Renderizar disfraces iniciales
    filterCostumes();
    renderCostumes();
    
    console.log('Aplicación inicializada correctamente');
}

/**
 * Evento de carga del DOM
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Exportar funciones globales para uso en HTML
window.clearFilters = clearFilters;
