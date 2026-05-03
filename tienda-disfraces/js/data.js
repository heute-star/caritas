// ===================================
// Data Management
// ===================================

let costumesData = [];
let filteredCostumes = [];

/**
 * Carga los datos de disfraces desde el archivo JSON
 */
async function loadCostumesData() {
    try {
        const response = await fetch('data/disfraces.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        costumesData = await response.json();
        filteredCostumes = [...costumesData];
        return costumesData;
    } catch (error) {
        console.error('Error cargando datos de disfraces:', error);
        showError('No se pudieron cargar los disfraces. Por favor, recarga la página.');
        return [];
    }
}

/**
 * Muestra un mensaje de error al usuario
 */
function showError(message) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.innerHTML = `
            <div style="color: var(--error); text-align: center;">
                <p><strong>Error:</strong> ${message}</p>
            </div>
        `;
    }
}

/**
 * Obtiene todos los disfraces
 */
function getAllCostumes() {
    return costumesData;
}

/**
 * Obtiene un disfraz por ID
 */
function getCostumeById(id) {
    return costumesData.find(costume => costume.id === id);
}

/**
 * Obtiene categorías únicas
 */
function getUniqueCategories() {
    return [...new Set(costumesData.map(costume => costume.categoria))];
}

/**
 * Obtiene temporadas únicas
 */
function getUniqueSeasons() {
    return [...new Set(costumesData.map(costume => costume.temporada))];
}

/**
 * Traduce nombres de categorías y temporadas al español legible
 */
const translations = {
    categories: {
        'halloween': 'Halloween',
        'carnaval': 'Carnaval',
        'superheroes': 'Superhéroes',
        'princesas': 'Princesas',
        'animales': 'Animales',
        'profesiones': 'Profesiones',
        'epoca': 'Época',
        'infantiles': 'Infantiles'
    },
    seasons: {
        'primavera': 'Primavera',
        'verano': 'Verano',
        'otono': 'Otoño',
        'invierno': 'Invierno',
        'todo-el-ano': 'Todo el año'
    }
};

/**
 * Obtiene la traducción de una categoría
 */
function getCategoryName(category) {
    return translations.categories[category] || category;
}

/**
 * Obtiene la traducción de una temporada
 */
function getSeasonName(season) {
    return translations.seasons[season] || season;
}
