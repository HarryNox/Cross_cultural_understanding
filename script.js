// Dummy Data for the Semantic Database
const dummyData = [
    {
        id: 1,
        title: "A Sunday on La Grande Jatte",
        author: "Georges Seurat",
        style: "Post-Impressionism",
        domain: "Fine Art",
        year: "1884-1886",
        region: "France",
        museum: "Art Institute of Chicago",
        tags: ["Pointillism", "Color Theory"]
    },
    {
        id: 2,
        title: "Symphony No. 5 in C minor, Op. 67",
        author: "Ludwig van Beethoven",
        style: "Viennese Classicism",
        domain: "Music",
        year: "1808",
        region: "Germany/Austria",
        museum: "N/A",
        tags: ["Sonata Form", "Per Aspera Ad Astra"]
    },
    {
        id: 3,
        title: "The Last Supper",
        author: "Leonardo da Vinci",
        style: "High Renaissance",
        domain: "Fine Art",
        year: "1495-1498",
        region: "Italy",
        museum: "Santa Maria delle Grazie (Milan)",
        tags: ["Linear Perspective", "Geometry"]
    },
    {
        id: 4,
        title: "Broadway Boogie Woogie",
        author: "Piet Mondrian",
        style: "Abstract / De Stijl",
        domain: "Fine Art",
        year: "1942-1943",
        region: "Netherlands",
        museum: "MoMA (New York)",
        tags: ["Grid", "Primary Colors"]
    },
    {
        id: 5,
        title: "The Milkmaid",
        author: "Johannes Vermeer",
        style: "Baroque",
        domain: "Fine Art",
        year: "c. 1660",
        region: "Netherlands",
        museum: "Rijksmuseum (Amsterdam)",
        tags: ["Camera Obscura", "Light"]
    },
    {
        id: 6,
        title: "String Quartet No. 2, Op. 10",
        author: "Arnold Schoenberg",
        style: "Modern",
        domain: "Music",
        year: "1908",
        region: "Austria",
        museum: "N/A",
        tags: ["Atonality", "12-tone technique"]
    }
];

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

// Form submission handler (Mockup logic)
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
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
            matchPeriod = lowerStyle.includes(period) || 
                          (period === 'modern' && lowerStyle.includes('abstract')) ||
                          (period === 'renaissance' && lowerStyle.includes('renaissance'));
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
});
