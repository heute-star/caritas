// ===================================
// Popular Costumes - Click Tracking
// ===================================

/**
 * Obtiene los clicks desde localStorage
 */
function getClickCounts() {
    const stored = localStorage.getItem('costumeClicks');
    return stored ? JSON.parse(stored) : {};
}

/**
 * Guarda los clicks en localStorage
 */
function saveClickCounts(clicks) {
    localStorage.setItem('costumeClicks', JSON.stringify(clicks));
}

/**
 * Registra un click en un disfraz
 */
function trackCostumeClick(costumeId) {
    const clicks = getClickCounts();
    clicks[costumeId] = (clicks[costumeId] || 0) + 1;
    saveClickCounts(clicks);
}

/**
 * Obtiene los 3 disfraces más clickeados
 */
function getPopularCostumes() {
    const clicks = getClickCounts();
    const allCostumes = getAllCostumes();
    
    // Si no hay clicks aún, devolver los primeros 3 disfraces
    if (Object.keys(clicks).length === 0) {
        return allCostumes.slice(0, 3);
    }
    
    // Ordenar disfraces por cantidad de clicks
    const sortedByClicks = allCostumes
        .map(costume => ({
            ...costume,
            clicks: clicks[costume.id] || 0
        }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 3);
    
    return sortedByClicks;
}

/**
 * Renderiza la sección de disfraces populares
 */
function renderPopularCostumes() {
    const popularGrid = document.getElementById('popular-grid');
    if (!popularGrid) return;
    
    const popularCostumes = getPopularCostumes();
    
    if (popularCostumes.length === 0) {
        popularGrid.innerHTML = '<p class="no-costumes">Aún no hay disfraces disponibles</p>';
        return;
    }
    
    popularGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    popularCostumes.forEach(costume => {
        const card = createCostumeCard(costume);
        fragment.appendChild(card);
    });
    
    popularGrid.appendChild(fragment);
}

/**
 * Inicializa el tracking cuando se hace click en una imagen
 */
function initializeClickTracking() {
    // Interceptar clicks en imágenes de disfraces
    document.addEventListener('click', (e) => {
        const costumeImage = e.target.closest('.costume-image');
        if (costumeImage) {
            const card = costumeImage.closest('.costume-card');
            if (card) {
                const costumeId = parseInt(card.getAttribute('data-id'));
                if (costumeId) {
                    trackCostumeClick(costumeId);
                }
            }
        }
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    initializeClickTracking();
});
