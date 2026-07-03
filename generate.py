import json
import random

# Real items
real_items = [
    {
        "id": 1,
        "title": "A Sunday on La Grande Jatte",
        "author": "Georges Seurat",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1884-1886",
        "region": "France",
        "museum": "Art Institute of Chicago",
        "tags": ["Pointillism", "Color Theory"]
    },
    {
        "id": 2,
        "title": "Symphony No. 5 in C minor, Op. 67",
        "author": "Ludwig van Beethoven",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1808",
        "region": "Germany/Austria",
        "museum": "N/A",
        "tags": ["Sonata Form", "Per Aspera Ad Astra"]
    },
    {
        "id": 3,
        "title": "The Last Supper",
        "author": "Leonardo da Vinci",
        "style": "High Renaissance",
        "domain": "Fine Art",
        "year": "1495-1498",
        "region": "Italy",
        "museum": "Santa Maria delle Grazie (Milan)",
        "tags": ["Linear Perspective", "Geometry"]
    },
    {
        "id": 4,
        "title": "Broadway Boogie Woogie",
        "author": "Piet Mondrian",
        "style": "Abstract / De Stijl",
        "domain": "Fine Art",
        "year": "1942-1943",
        "region": "Netherlands",
        "museum": "MoMA (New York)",
        "tags": ["Grid", "Primary Colors"]
    },
    {
        "id": 5,
        "title": "The Milkmaid",
        "author": "Johannes Vermeer",
        "style": "Baroque",
        "domain": "Fine Art",
        "year": "c. 1660",
        "region": "Netherlands",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": ["Camera Obscura", "Light"]
    },
    {
        "id": 6,
        "title": "String Quartet No. 2, Op. 10",
        "author": "Arnold Schoenberg",
        "style": "Modern",
        "domain": "Music",
        "year": "1908",
        "region": "Austria",
        "museum": "N/A",
        "tags": ["Atonality", "12-tone technique"]
    },
    {
        "id": 7,
        "title": "Mona Lisa",
        "author": "Leonardo da Vinci",
        "style": "High Renaissance",
        "domain": "Fine Art",
        "year": "1503-1506",
        "region": "Italy",
        "museum": "Louvre Museum (Paris)",
        "tags": ["Sfumato", "Portrait"]
    },
    {
        "id": 8,
        "title": "The Starry Night",
        "author": "Vincent van Gogh",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1889",
        "region": "Netherlands / France",
        "museum": "MoMA (New York)",
        "tags": ["Impasto", "Emotion"]
    },
    {
        "id": 9,
        "title": "Las Meninas",
        "author": "Diego Velázquez",
        "style": "Baroque",
        "domain": "Fine Art",
        "year": "1656",
        "region": "Spain",
        "museum": "Prado Museum (Madrid)",
        "tags": ["Composition", "Illusion"]
    },
    {
        "id": 10,
        "title": "The Birth of Venus",
        "author": "Sandro Botticelli",
        "style": "Early Renaissance",
        "domain": "Fine Art",
        "year": "c. 1484-1486",
        "region": "Italy",
        "museum": "Uffizi Gallery (Florence)",
        "tags": ["Mythology", "Contrapposto"]
    }
]

# Generate 90 more fake items to reach 100
first_names = ["Claude", "Pablo", "Rembrandt", "Michelangelo", "Raphael", "Titian", "Edgar", "Paul", "Wassily", "Gustav"]
last_names = ["Monet", "Picasso", "van Rijn", "Buonarroti", "Sanzio", "Vecellio", "Degas", "Cézanne", "Kandinsky", "Klimt"]
music_first = ["Wolfgang Amadeus", "Johann Sebastian", "Frederic", "Igor", "Richard", "Johannes", "Pyotr Ilyich", "Antonio", "Franz", "Claude"]
music_last = ["Mozart", "Bach", "Chopin", "Stravinsky", "Wagner", "Brahms", "Tchaikovsky", "Vivaldi", "Schubert", "Debussy"]

styles = ["Renaissance", "Baroque", "Romanticism", "Impressionism", "Post-Impressionism", "Modern", "Abstract", "Viennese Classicism", "Neoclassicism", "Realism", "Symbolism", "Expressionism"]
domains = ["Fine Art", "Music"]
museums = ["Louvre Museum (Paris)", "Rijksmuseum (Amsterdam)", "Uffizi Gallery (Florence)", "Prado Museum (Madrid)", "Metropolitan Museum of Art (NY)", "Art Institute of Chicago", "National Gallery (London)", "MoMA (New York)"]
regions = ["Italy", "France", "Netherlands", "Spain", "Germany", "Austria", "UK", "Russia"]
tags_pool = ["Chiaroscuro", "Color Field", "Cubism", "Surrealism", "Fresco", "Oil on Canvas", "Symphony", "Concerto", "Sonata", "Opera", "Polyphony", "Counterpoint", "Minimalism", "Serialism", "Aleatory", "Action Painting", "Tenebrism"]

data = real_items.copy()

for i in range(11, 101):
    domain = random.choice(domains)
    if domain == "Music":
        title = f"{random.choice(['Symphony', 'Concerto', 'Sonata', 'String Quartet'])} No. {random.randint(1, 41)} in {random.choice(['C', 'D', 'E', 'F', 'G', 'A', 'B'])} {random.choice(['major', 'minor'])}"
        author = f"{random.choice(music_first)} {random.choice(music_last)}"
        museum = "N/A"
    else:
        title = f"{random.choice(['Portrait', 'Landscape', 'Still Life', 'Study'])} of {random.choice(['a Lady', 'a Man', 'Nature', 'a Musician', 'a Saint', 'the City'])} {random.randint(1, 100)}"
        author = f"{random.choice(first_names)} {random.choice(last_names)}"
        museum = random.choice(museums)
        
    item = {
        "id": i,
        "title": title,
        "author": author,
        "style": random.choice(styles),
        "domain": domain,
        "year": str(random.randint(1400, 1950)),
        "region": random.choice(regions),
        "museum": museum,
        "tags": random.sample(tags_pool, random.randint(1, 3))
    }
    data.append(item)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const dummyData = ' + json.dumps(data, indent=4, ensure_ascii=False) + ';\n')

print("data.js created with 100 items.")
