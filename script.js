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

// --- News and Admin Mode Logic ---
const ADMIN_PASSWORD = "TakamatsuEdit";
let isAdmin = sessionStorage.getItem('lumina_admin') === 'true';

const newsListEl = document.getElementById('news-list');
const adminDashboard = document.getElementById('admin-dashboard');
const adminLoginBtn = document.getElementById('admin-login-btn');
const addNewsBtn = document.getElementById('add-news-btn');
const newsInput = document.getElementById('news-input');

// Default mock news if local storage is empty
const defaultNews = [
    { id: Date.now(), text: "Welcome to Lumina! Explore the interconnectedness of European cultural heritage.", date: "2026/07/03" }
];

function getNews() {
    const stored = localStorage.getItem('lumina_news');
    return stored ? JSON.parse(stored) : defaultNews;
}

function saveNews(newsArray) {
    localStorage.setItem('lumina_news', JSON.stringify(newsArray));
}

function renderNews() {
    if (!newsListEl) return;
    const newsArray = getNews();
    newsListEl.innerHTML = '';
    
    if (newsArray.length === 0) {
        newsListEl.innerHTML = '<li style="color: var(--text-secondary);">No recent announcements.</li>';
    } else {
        // Sort by id descending (newest first)
        newsArray.sort((a, b) => b.id - a.id).forEach(item => {
            const li = document.createElement('li');
            li.style.padding = '0.75rem 0';
            li.style.borderBottom = '1px solid var(--border-color)';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';

            const contentSpan = document.createElement('span');
            contentSpan.innerHTML = `<span style="color: var(--text-secondary); margin-right: 1rem; font-family: monospace;">[${item.date}]</span> <span style="color: var(--text-primary);">${item.text}</span>`;
            li.appendChild(contentSpan);

            if (isAdmin) {
                const delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.style.padding = '0.2rem 0.5rem';
                delBtn.style.background = 'transparent';
                delBtn.style.color = '#ff6b6b';
                delBtn.style.border = '1px solid #ff6b6b';
                delBtn.style.borderRadius = 'var(--radius-sm)';
                delBtn.style.cursor = 'pointer';
                delBtn.style.fontSize = '0.75rem';
                delBtn.onclick = () => {
                    if(confirm('Delete this news?')) {
                        const updated = getNews().filter(n => n.id !== item.id);
                        saveNews(updated);
                        renderNews();
                    }
                };
                li.appendChild(delBtn);
            }

            newsListEl.appendChild(li);
        });
    }
}

function updateAdminUI() {
    if (isAdmin) {
        if(adminDashboard) adminDashboard.style.display = 'block';
        if(adminLoginBtn) adminLoginBtn.textContent = 'Logout Admin';
    } else {
        if(adminDashboard) adminDashboard.style.display = 'none';
        if(adminLoginBtn) adminLoginBtn.textContent = 'Admin Login';
    }
    renderNews(); // Re-render to show/hide delete buttons
}

// Admin Login/Logout Event
if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', () => {
        if (isAdmin) {
            isAdmin = false;
            sessionStorage.removeItem('lumina_admin');
            alert('Logged out from Admin Mode.');
        } else {
            const pwd = prompt("Enter Administrator Password:");
            if (pwd === ADMIN_PASSWORD) {
                isAdmin = true;
                sessionStorage.setItem('lumina_admin', 'true');
                alert('Successfully entered Admin Mode.');
            } else if (pwd !== null) {
                alert('Incorrect password.');
            }
        }
        updateAdminUI();
    });
}

// Add News Event
if (addNewsBtn) {
    addNewsBtn.addEventListener('click', () => {
        const text = newsInput.value.trim();
        if (!text) return;
        
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        
        const newObj = {
            id: Date.now(),
            text: text,
            date: `${yyyy}/${mm}/${dd}`
        };
        
        const newsArray = getNews();
        newsArray.push(newObj);
        saveNews(newsArray);
        
        newsInput.value = '';
        renderNews();
    });
}

// Initializations
updateAdminUI();

