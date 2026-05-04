// ===================================
// Main Application Logic - Caritas Alegres V3
// ===================================

/**
 * Renderiza una tarjeta de disfraz SIMPLE
 * Solo: Imagen (clickeable) + Badge Categoría + Edad + Nombre
 */
function createCostumeCard(costume) {
    const card = document.createElement('div');
    card.className = 'costume-card';
    card.setAttribute('data-id', costume.id);
    
    const imageSrc = costume.imagen || 'images/placeholder.svg';
    const imageThumb = costume.imagen_thumb || imageSrc;
    
    card.innerHTML = `
        <div class="costume-image" onclick="openImageModal('${imageSrc}', '${costume.nombre}')">
            <img 
                src="${imageThumb}" 
                alt="${costume.nombre}"
                loading="lazy"
                onerror="this.src='images/placeholder.svg'"
            >
            <span class="costume-badge">
                ${getCategoryName(costume.categoria)}
            </span>
        </div>
        <div class="costume-info">
            <div class="costume-age">${getAgeName(costume.edad)}</div>
            <h3 class="costume-name">${costume.nombre}</h3>
        </div>
    `;
    
    return card;
}

/**
 * Abre modal con imagen grande
 */
function openImageModal(imageSrc, costumeName) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalCaption.textContent = costumeName;
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra modal de imagen
 */
function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

/**
 * Renderiza todos los disfraces filtrados
 */
function renderCostumes() {
    const costumesGrid = document.getElementById('costumes-grid');
    const loading = document.getElementById('loading');
    
    if (!costumesGrid) return;
    
    if (loading) {
        loading.style.display = 'none';
    }
    
    costumesGrid.innerHTML = '';
    
    if (filteredCostumes.length === 0) {
        toggleNoResults(true);
        updateResultsCount(0);
        return;
    }
    
    toggleNoResults(false);
    
    const sorted = sortCostumes(filteredCostumes, 'nombre');
    
    const fragment = document.createDocumentFragment();
    sorted.forEach(costume => {
        const card = createCostumeCard(costume);
        fragment.appendChild(card);
    });
    
    costumesGrid.appendChild(fragment);
    updateResultsCount(filteredCostumes.length);
    
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
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
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
 * Inicializa smooth scroll
 */
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
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
 * Maneja errores de imágenes
 */
function handleImageErrors() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'images/placeholder.svg';
        }
    }, true);
}

/**
 * Inicializa modal listeners
 */
function initializeModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeImageModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeImageModal();
        }
    });
}

/**
 * Inicializa la aplicación
 */
async function initializeApp() {
    console.log('Inicializando Caritas Alegres...');
    
    await loadCostumesData();
    
    initializeFilters();
    initializeMobileMenu();
    initializeSmoothScroll();
    handleImageErrors();
    initializeModal();
    
    filterCostumes();
    renderCostumes();
    renderPopularCostumes();  // ← NUEVO: Renderizar disfraces populares
    
    console.log('Aplicación inicializada correctamente');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

window.clearFilters = clearFilters;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;