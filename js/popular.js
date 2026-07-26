// ===================================
// Popular Costumes V6
// Ya NO se basa en clicks acumulados: siempre muestra 1 disfraz al azar
// de cada personaje del elenco (hombre, mujer, niño, niña)
// ===================================

function getPopularCostumes() {
    const allCostumes = getAllCostumes();
    const castMembers = ['hombre', 'mujer', 'nino', 'nina'];
    const picks = [];

    castMembers.forEach(genero => {
        const options = allCostumes.filter(c => c.genero === genero);
        if (options.length > 0) {
            const randomIndex = Math.floor(Math.random() * options.length);
            picks.push(options[randomIndex]);
        }
    });

    return picks;
}

function renderPopularCostumes() {
    const popularGrid = document.getElementById('popular-grid');
    if (!popularGrid) return;

    const popularCostumes = getPopularCostumes();

    if (popularCostumes.length === 0) {
        popularGrid.innerHTML = '<p>Aún no hay disfraces disponibles</p>';
        return;
    }

    popularGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    popularCostumes.forEach(costume => {
        // Se pasa como array de 1 elemento: tarjeta simple, sin flechas de variante
        const card = createCostumeCard([costume]);
        fragment.appendChild(card);
    });

    popularGrid.appendChild(fragment);
}