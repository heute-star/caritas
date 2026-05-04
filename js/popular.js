// Popular V4 - 4 disfraces

function getClickCounts() {
    const stored = localStorage.getItem('costumeClicks');
    return stored ? JSON.parse(stored) : {};
}

function saveClickCounts(clicks) {
    localStorage.setItem('costumeClicks', JSON.stringify(clicks));
}

function trackCostumeClick(costumeId) {
    const clicks = getClickCounts();
    clicks[costumeId] = (clicks[costumeId] || 0) + 1;
    saveClickCounts(clicks);
}

function getPopularCostumes() {
    const clicks = getClickCounts();
    const allCostumes = getAllCostumes();
    
    if (Object.keys(clicks).length === 0) {
        return allCostumes.slice(0, 4);
    }
    
    const sortedByClicks = allCostumes
        .map(costume => ({
            ...costume,
            clicks: clicks[costume.id] || 0
        }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 4);
    
    return sortedByClicks;
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
        const card = createCostumeCard(costume);
        fragment.appendChild(card);
    });
    
    popularGrid.appendChild(fragment);
}

function initializeClickTracking() {
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

document.addEventListener('DOMContentLoaded', () => {
    initializeClickTracking();
});