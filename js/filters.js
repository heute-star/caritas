// ===================================
// Filters and Search Logic - Caritas Alegres V3
// ===================================

/**
 * Filtra los disfraces según los criterios seleccionados
 * BÚSQUEDA MEJORADA: palabras individuales + categoría + edad + género
 */
function filterCostumes() {
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    const category = document.getElementById('category-filter').value;
    const age = document.getElementById('age-filter').value;

    filteredCostumes = costumesData.filter(costume => {
        // Filtro de búsqueda MEJORADO
        let matchesSearch = true;
        
        if (searchTerm !== '') {
            // Dividir búsqueda en palabras individuales
            const searchWords = searchTerm.split(/\s+/);
            
            // Texto donde buscar (nombre + categoría + edad + género)
            const searchableText = `
                ${costume.nombre.toLowerCase()}
                ${costume.categoria.toLowerCase()}
                ${costume.edad.toLowerCase()}
                ${costume.genero.toLowerCase()}
                ${getCategoryName(costume.categoria).toLowerCase()}
                ${getAgeName(costume.edad).toLowerCase()}
            `.replace(/\s+/g, ' ');
            
            // Cada palabra debe aparecer en algún lugar
            matchesSearch = searchWords.every(word => searchableText.includes(word));
        }

        // Filtro de categoría
        const matchesCategory = category === 'todas' || costume.categoria === category;

        // Filtro de edad
        const matchesAge = age === 'todas' || costume.edad === age;

        return matchesSearch && matchesCategory && matchesAge;
    });

    return filteredCostumes;
}

/**
 * Limpia todos los filtros
 */
function clearFilters() {
    document.getElementById('search').value = '';
    document.getElementById('category-filter').value = 'todas';
    document.getElementById('age-filter').value = 'todas';
    
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
        case 'categoria':
            sorted.sort((a, b) => a.categoria.localeCompare(b.categoria));
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
    const ageFilter = document.getElementById('age-filter');
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

    if (ageFilter) {
        ageFilter.addEventListener('change', () => {
            filterCostumes();
            renderCostumes();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}