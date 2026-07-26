// ===================================
// Main Application Logic - Caritas Alegres V6
// ===================================

/**
 * Agrupa una lista de disfraces (ya filtrados) por su campo "grupo".
 * Cada grupo se convierte en UNA tarjeta con navegación entre variantes.
 */
function groupFilteredCostumes(costumes) {
    const groupsMap = new Map();

    costumes.forEach(costume => {
        const key = costume.grupo || `id-${costume.id}`;
        if (!groupsMap.has(key)) {
            groupsMap.set(key, []);
        }
        groupsMap.get(key).push(costume);
    });

    return Array.from(groupsMap.values());
}

/**
 * Crea una tarjeta de disfraz a partir de un array de variantes
 * (1 variante = tarjeta simple, 2+ variantes = tarjeta con flechas)
 */
function createCostumeCard(variants) {
    const card = document.createElement('div');
    card.className = 'costume-card';
    card.dataset.variants = JSON.stringify(variants);
    card.dataset.currentIndex = '0';

    renderCardContent(card, variants, 0);

    return card;
}

/**
 * Dibuja el contenido interno de una tarjeta para una variante específica
 */
function renderCardContent(card, variants, index) {
    const costume = variants[index];
    const imageSrc = costume.imagen || 'images/placeholder.svg';
    const hasMultiple = variants.length > 1;

    card.setAttribute('data-id', costume.id);

    card.innerHTML = `
        <div class="costume-image">
            ${hasMultiple ? `
                <button type="button" class="variant-arrow variant-arrow-left" aria-label="Variante anterior">&#10094;</button>
                <button type="button" class="variant-arrow variant-arrow-right" aria-label="Siguiente variante">&#10095;</button>
                <span class="variant-indicator">${index + 1}/${variants.length}</span>
            ` : ''}
            <img
                src="${imageSrc}"
                alt="${costume.nombre}"
                loading="lazy"
                onerror="this.src='images/placeholder.svg'"
            >
        </div>
        <div class="costume-info">
            <div class="costume-tags">
                <span class="costume-age">${getAgeName(costume.edad)}</span>
                <span class="costume-badge">${getCategoryName(costume.categoria)}</span>
            </div>
            <h3 class="costume-name">${costume.nombre}</h3>
        </div>
    `;
}

// Estado del modal: qué variantes tiene abiertas y en cuál está parado
let currentModalVariants = null;
let currentModalIndex = 0;
let currentModalCard = null;

/**
 * Actualiza la imagen/caption/flechas del modal según la variante actual
 */
function updateModalDisplay() {
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const arrowLeft = document.getElementById('modal-arrow-left');
    const arrowRight = document.getElementById('modal-arrow-right');

    const costume = currentModalVariants[currentModalIndex];
    modalImg.src = costume.imagen || 'images/placeholder.svg';
    modalImg.alt = costume.nombre;
    modalCaption.textContent = costume.nombre;

    const hasMultiple = currentModalVariants.length > 1;
    if (arrowLeft) arrowLeft.style.display = hasMultiple ? 'flex' : 'none';
    if (arrowRight) arrowRight.style.display = hasMultiple ? 'flex' : 'none';
}

/**
 * Abre el modal a partir de una tarjeta (toma sus variantes y su variante actual)
 */
function openImageModalFromCard(card) {
    const variants = JSON.parse(card.dataset.variants);
    const index = parseInt(card.dataset.currentIndex, 10) || 0;

    currentModalVariants = variants;
    currentModalIndex = index;
    currentModalCard = card;

    const modal = document.getElementById('image-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    updateModalDisplay();
}

/**
 * Cambia de variante dentro del modal, y sincroniza la tarjeta de origen
 * para que al cerrar el modal, la tarjeta quede mostrando la misma variante
 */
function changeModalVariant(direction) {
    if (!currentModalVariants) return;

    const len = currentModalVariants.length;
    currentModalIndex = (currentModalIndex + direction + len) % len;
    updateModalDisplay();

    if (currentModalCard) {
        currentModalCard.dataset.currentIndex = String(currentModalIndex);
        renderCardContent(currentModalCard, currentModalVariants, currentModalIndex);
    }
}

/**
 * Cierra modal de imagen
 */
function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
    currentModalVariants = null;
    currentModalCard = null;
}

/**
 * Renderiza todos los disfraces filtrados, agrupados por variante
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
    const grouped = groupFilteredCostumes(sorted);

    const fragment = document.createDocumentFragment();
    grouped.forEach(variants => {
        const card = createCostumeCard(variants);
        fragment.appendChild(card);
    });

    costumesGrid.appendChild(fragment);
    updateResultsCount(grouped.length);

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
 * Maneja los clicks dentro de las tarjetas de disfraz:
 * - Flechas de variante → cambia la imagen mostrada en esa tarjeta
 * - Click en la imagen → abre el modal con la variante actualmente visible
 */
function initializeCardInteractions() {
    document.addEventListener('click', (e) => {
        const leftArrow = e.target.closest('.variant-arrow-left');
        const rightArrow = e.target.closest('.variant-arrow-right');

        if (leftArrow || rightArrow) {
            e.stopPropagation();
            const card = e.target.closest('.costume-card');
            if (!card) return;

            const variants = JSON.parse(card.dataset.variants);
            let index = parseInt(card.dataset.currentIndex, 10);

            index = leftArrow
                ? (index - 1 + variants.length) % variants.length
                : (index + 1) % variants.length;

            card.dataset.currentIndex = String(index);
            renderCardContent(card, variants, index);
            return;
        }

        const imageContainer = e.target.closest('.costume-image');
        if (imageContainer) {
            const card = e.target.closest('.costume-card');
            if (card) {
                openImageModalFromCard(card);
            }
        }
    });
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
    const arrowLeft = document.getElementById('modal-arrow-left');
    const arrowRight = document.getElementById('modal-arrow-right');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeImageModal);
    }

    if (arrowLeft) {
        arrowLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            changeModalVariant(-1);
        });
    }

    if (arrowRight) {
        arrowRight.addEventListener('click', (e) => {
            e.stopPropagation();
            changeModalVariant(1);
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'block') return;

        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowLeft') {
            changeModalVariant(-1);
        } else if (e.key === 'ArrowRight') {
            changeModalVariant(1);
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
    initializeCardInteractions();

    filterCostumes();
    renderCostumes();
    renderPopularCostumes();

    console.log('Aplicación inicializada correctamente');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

window.clearFilters = clearFilters;
window.closeImageModal = closeImageModal;