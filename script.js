// Dummy data is now loaded from data.js

const galleryGrid = document.getElementById('gallery-grid');
const searchForm = document.getElementById('search-form');

// Function to render cards
function renderCards(data) {
    galleryGrid.innerHTML = '';
    
    if (data.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No results found matching your criteria.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'art-card';
        
        // Tags to string
        const tagsHtml = item.tags.map(tag => `<span>#${tag}</span>`).join(' ');

        card.innerHTML = `
            <div class="img-placeholder" title="Add image for ${item.title} here">
                <!-- User will insert actual <img> here later -->
            </div>
            <div class="card-content">
                <span class="card-style-tag">${item.style}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-author">${item.author}</p>
                <div class="card-meta">
                    <span>📅 ${item.year}</span>
                    <span>📍 ${item.region}</span>
                    <span>🏛️ ${item.museum}</span>
                    <span>🎵/🎨 ${item.domain}</span>
                </div>
                <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--accent-color);">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(card);
    });
}

// Initial render
renderCards(dummyData);

// Filter function
function filterData() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const period = document.getElementById('period').value;
    const domain = document.getElementById('domain').value;
    const museum = document.getElementById('museum').value;

    const filtered = dummyData.filter(item => {
        // Simple keyword match across title, author, tags, and museum
        const matchKeyword = keyword === '' || 
                             item.title.toLowerCase().includes(keyword) || 
                             item.author.toLowerCase().includes(keyword) ||
                             (item.museum && item.museum.toLowerCase().includes(keyword)) ||
                             item.tags.some(tag => tag.toLowerCase().includes(keyword));
                             
        // Period match (simplified mapping)
        let matchPeriod = true;
        if (period !== 'all') {
            const lowerStyle = item.style.toLowerCase();
            if (period === 'renaissance') {
                matchPeriod = lowerStyle.includes('renaissance') || lowerStyle.includes('gothic');
            } else if (period === 'baroque') {
                matchPeriod = lowerStyle.includes('baroque');
            } else if (period === 'romanticism') {
                matchPeriod = lowerStyle.includes('romanticism') || lowerStyle.includes('neoclassicism') || lowerStyle.includes('classicism') || lowerStyle.includes('classical');
            } else if (period === 'impressionism') {
                matchPeriod = lowerStyle.includes('impressionism') || lowerStyle.includes('realism');
            } else if (period === 'modern') {
                matchPeriod = lowerStyle.includes('modern') || lowerStyle.includes('abstract') || lowerStyle.includes('contemporary');
            } else {
                matchPeriod = lowerStyle.includes(period);
            }
        }

        // Domain match
        let matchDomain = true;
        if (domain !== 'all') {
            if (domain === 'other') {
                matchDomain = !['fine art', 'music', 'architecture'].includes(item.domain.toLowerCase());
            } else {
                matchDomain = item.domain.toLowerCase().includes(domain);
            }
        }

        // Museum match
        let matchMuseum = true;
        if (museum !== 'all') {
            const lowerMuseum = (item.museum || '').toLowerCase();
            if (museum === 'other') {
                matchMuseum = lowerMuseum === '' || lowerMuseum.includes('n/a') || lowerMuseum.includes('other');
            } else if (museum === 'artic') {
                matchMuseum = lowerMuseum.includes('chicago');
            } else {
                matchMuseum = lowerMuseum.includes(museum);
            }
        }

        return matchKeyword && matchPeriod && matchDomain && matchMuseum;
    });

    renderCards(filtered);
}

// Event Listeners for real-time filtering
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterData();
});

document.getElementById('keyword').addEventListener('input', filterData);
document.getElementById('period').addEventListener('change', filterData);
document.getElementById('domain').addEventListener('change', filterData);
document.getElementById('museum').addEventListener('change', filterData);
