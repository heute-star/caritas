// ===================================
// Filters and Search Logic
// ===================================

/**
 * Filtra los disfraces según los criterios seleccionados
 */
function filterCostumes() {
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    const category = document.getElementById('category-filter').value;
    const season = document.getElementById('season-filter').value;
    const availability = document.getElementById('availability-filter').value;

    filteredCostumes = costumesData.filter(costume => {
        // Filtro de búsqueda por nombre y descripción
        const matchesSearch = searchTerm === '' || 
            costume.nombre.toLowerCase().includes(searchTerm) ||
            costume.descripcion.toLowerCase().includes(searchTerm);

        // Filtro de categoría
        const matchesCategory = category === 'todas' || costume.categoria === category;

        // Filtro de temporada
        const matchesSeason = season === 'todas' || costume.temporada === season;

        // Filtro de disponibilidad
        const matchesAvailability = 
            availability === 'todos' ||
            (availability === 'disponible' && costume.disponible) ||
            (availability === 'no-disponible' && !costume.disponible);

        return matchesSearch && matchesCategory && matchesSeason && matchesAvailability;
    });

    return filteredCostumes;
}

/**
 * Limpia todos los filtros
 */
function clearFilters() {
    document.getElementById('search').value = '';
    document.getElementById('category-filter').value = 'todas';
    document.getElementById('season-filter').value = 'todas';
    document.getElementById('availability-filter').value = 'todos';
    
    filterCostumes();
    renderCostumes();
}

/**
 * Ordena los disfraces
 */
function sortCostumes(costumes, sortBy = 'nombre') {
    const sorted = [...costumes];
    
    switch(sortBy) {
        case 'nombre':
            sorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'precio-alquiler-asc':
            sorted.sort((a, b) => parseFloat(a.precio_alquiler) - parseFloat(b.precio_alquiler));
            break;
        case 'precio-alquiler-desc':
            sorted.sort((a, b) => parseFloat(b.precio_alquiler) - parseFloat(a.precio_alquiler));
            break;
        case 'disponibilidad':
            sorted.sort((a, b) => (b.disponible ? 1 : 0) - (a.disponible ? 1 : 0));
            break;
        default:
            break;
    }
    
    return sorted;
}

/**
 * Actualiza el contador de resultados
 */
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.innerHTML = `Mostrando <strong>${count}</strong> disfrace${count !== 1 ? 's' : ''}`;
    }
}

/**
 * Muestra u oculta el mensaje de "sin resultados"
 */
function toggleNoResults(show) {
    const noResults = document.getElementById('no-results');
    const costumesGrid = document.getElementById('costumes-grid');
    
    if (noResults && costumesGrid) {
        noResults.style.display = show ? 'block' : 'none';
        costumesGrid.style.display = show ? 'none' : 'grid';
    }
}

/**
 * Debounce function para optimizar búsquedas en tiempo real
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Maneja el evento de búsqueda con debounce
 */
const handleSearch = debounce(() => {
    filterCostumes();
    renderCostumes();
}, 300);

/**
 * Inicializa los event listeners de los filtros
 */
function initializeFilters() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const seasonFilter = document.getElementById('season-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            filterCostumes();
            renderCostumes();
        });
    }

    if (seasonFilter) {
        seasonFilter.addEventListener('change', () => {
            filterCostumes();
            renderCostumes();
        });
    }

    if (availabilityFilter) {
        availabilityFilter.addEventListener('change', () => {
            filterCostumes();
            renderCostumes();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}
