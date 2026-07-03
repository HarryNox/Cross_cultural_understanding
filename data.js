const dummyData = [
    {
        "id": 1,
        "title": "A Sunday on La Grande Jatte",
        "author": "Georges Seurat",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1884-1886",
        "region": "France",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Pointillism",
            "Color Theory"
        ]
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
        "tags": [
            "Sonata Form",
            "Per Aspera Ad Astra"
        ]
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
        "tags": [
            "Linear Perspective",
            "Geometry"
        ]
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
        "tags": [
            "Grid",
            "Primary Colors"
        ]
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
        "tags": [
            "Camera Obscura",
            "Light"
        ]
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
        "tags": [
            "Atonality",
            "12-tone technique"
        ]
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
        "tags": [
            "Sfumato",
            "Portrait"
        ]
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
        "tags": [
            "Impasto",
            "Emotion"
        ]
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
        "tags": [
            "Composition",
            "Illusion"
        ]
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
        "tags": [
            "Mythology",
            "Contrapposto"
        ]
    },
    {
        "id": 11,
        "title": "Still Life of Nature 68",
        "author": "Edgar Monet",
        "style": "Realism",
        "domain": "Fine Art",
        "year": "1653",
        "region": "Austria",
        "museum": "Prado Museum (Madrid)",
        "tags": [
            "Sonata",
            "Concerto",
            "Polyphony"
        ]
    },
    {
        "id": 12,
        "title": "Still Life of Nature 26",
        "author": "Raphael Monet",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1845",
        "region": "Italy",
        "museum": "MoMA (New York)",
        "tags": [
            "Serialism"
        ]
    },
    {
        "id": 13,
        "title": "String Quartet No. 24 in E minor",
        "author": "Wolfgang Amadeus Bach",
        "style": "Impressionism",
        "domain": "Music",
        "year": "1769",
        "region": "Netherlands",
        "museum": "N/A",
        "tags": [
            "Opera",
            "Action Painting"
        ]
    },
    {
        "id": 14,
        "title": "Still Life of a Musician 46",
        "author": "Paul Picasso",
        "style": "Expressionism",
        "domain": "Fine Art",
        "year": "1798",
        "region": "Spain",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Opera",
            "Tenebrism",
            "Polyphony"
        ]
    },
    {
        "id": 15,
        "title": "Concerto No. 40 in B major",
        "author": "Antonio Chopin",
        "style": "Baroque",
        "domain": "Music",
        "year": "1592",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas",
            "Action Painting",
            "Tenebrism"
        ]
    },
    {
        "id": 16,
        "title": "Landscape of a Musician 54",
        "author": "Edgar Degas",
        "style": "Realism",
        "domain": "Fine Art",
        "year": "1932",
        "region": "Germany",
        "museum": "Louvre Museum (Paris)",
        "tags": [
            "Polyphony",
            "Fresco"
        ]
    },
    {
        "id": 17,
        "title": "Still Life of Nature 79",
        "author": "Titian van Rijn",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1623",
        "region": "Russia",
        "museum": "MoMA (New York)",
        "tags": [
            "Chiaroscuro",
            "Color Field",
            "Aleatory"
        ]
    },
    {
        "id": 18,
        "title": "Landscape of a Man 88",
        "author": "Raphael van Rijn",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1779",
        "region": "Italy",
        "museum": "National Gallery (London)",
        "tags": [
            "Cubism",
            "Surrealism",
            "Chiaroscuro"
        ]
    },
    {
        "id": 19,
        "title": "Portrait of a Saint 45",
        "author": "Michelangelo Monet",
        "style": "Expressionism",
        "domain": "Fine Art",
        "year": "1659",
        "region": "Russia",
        "museum": "National Gallery (London)",
        "tags": [
            "Counterpoint",
            "Minimalism",
            "Surrealism"
        ]
    },
    {
        "id": 20,
        "title": "Symphony No. 1 in G minor",
        "author": "Claude Schubert",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1926",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas",
            "Symphony"
        ]
    },
    {
        "id": 21,
        "title": "Still Life of a Lady 37",
        "author": "Paul van Rijn",
        "style": "Neoclassicism",
        "domain": "Fine Art",
        "year": "1947",
        "region": "Germany",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Symphony",
            "Aleatory",
            "Fresco"
        ]
    },
    {
        "id": 22,
        "title": "Sonata No. 29 in F major",
        "author": "Claude Brahms",
        "style": "Renaissance",
        "domain": "Music",
        "year": "1763",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Minimalism"
        ]
    },
    {
        "id": 23,
        "title": "Landscape of a Saint 14",
        "author": "Rembrandt Sanzio",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1708",
        "region": "Germany",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Counterpoint",
            "Opera",
            "Aleatory"
        ]
    },
    {
        "id": 24,
        "title": "Portrait of a Musician 74",
        "author": "Titian Picasso",
        "style": "Viennese Classicism",
        "domain": "Fine Art",
        "year": "1743",
        "region": "Austria",
        "museum": "Louvre Museum (Paris)",
        "tags": [
            "Fresco"
        ]
    },
    {
        "id": 25,
        "title": "String Quartet No. 24 in B minor",
        "author": "Richard Schubert",
        "style": "Modern",
        "domain": "Music",
        "year": "1685",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Action Painting",
            "Fresco",
            "Polyphony"
        ]
    },
    {
        "id": 26,
        "title": "Symphony No. 31 in A major",
        "author": "Igor Chopin",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1538",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Opera",
            "Concerto",
            "Cubism"
        ]
    },
    {
        "id": 27,
        "title": "Landscape of a Lady 31",
        "author": "Rembrandt Picasso",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1481",
        "region": "UK",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Surrealism",
            "Symphony"
        ]
    },
    {
        "id": 28,
        "title": "Symphony No. 31 in C minor",
        "author": "Wolfgang Amadeus Bach",
        "style": "Modern",
        "domain": "Music",
        "year": "1738",
        "region": "UK",
        "museum": "N/A",
        "tags": [
            "Cubism"
        ]
    },
    {
        "id": 29,
        "title": "String Quartet No. 32 in D major",
        "author": "Johann Sebastian Stravinsky",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1737",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Fresco",
            "Sonata",
            "Action Painting"
        ]
    },
    {
        "id": 30,
        "title": "Symphony No. 37 in C minor",
        "author": "Pyotr Ilyich Debussy",
        "style": "Symbolism",
        "domain": "Music",
        "year": "1479",
        "region": "Netherlands",
        "museum": "N/A",
        "tags": [
            "Tenebrism"
        ]
    },
    {
        "id": 31,
        "title": "Concerto No. 20 in D major",
        "author": "Igor Chopin",
        "style": "Impressionism",
        "domain": "Music",
        "year": "1497",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Fresco",
            "Serialism"
        ]
    },
    {
        "id": 32,
        "title": "Sonata No. 25 in D minor",
        "author": "Wolfgang Amadeus Vivaldi",
        "style": "Abstract",
        "domain": "Music",
        "year": "1510",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Surrealism"
        ]
    },
    {
        "id": 33,
        "title": "String Quartet No. 26 in A minor",
        "author": "Frederic Bach",
        "style": "Neoclassicism",
        "domain": "Music",
        "year": "1829",
        "region": "UK",
        "museum": "N/A",
        "tags": [
            "Color Field"
        ]
    },
    {
        "id": 34,
        "title": "Portrait of a Lady 75",
        "author": "Claude Monet",
        "style": "Neoclassicism",
        "domain": "Fine Art",
        "year": "1849",
        "region": "Russia",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Chiaroscuro",
            "Symphony"
        ]
    },
    {
        "id": 35,
        "title": "Portrait of a Saint 23",
        "author": "Gustav Cézanne",
        "style": "Renaissance",
        "domain": "Fine Art",
        "year": "1948",
        "region": "Italy",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Minimalism",
            "Concerto"
        ]
    },
    {
        "id": 36,
        "title": "Study of Nature 82",
        "author": "Edgar Buonarroti",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1720",
        "region": "Austria",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Minimalism",
            "Serialism",
            "Surrealism"
        ]
    },
    {
        "id": 37,
        "title": "Still Life of a Musician 56",
        "author": "Edgar Degas",
        "style": "Realism",
        "domain": "Fine Art",
        "year": "1419",
        "region": "France",
        "museum": "Prado Museum (Madrid)",
        "tags": [
            "Sonata",
            "Concerto",
            "Symphony"
        ]
    },
    {
        "id": 38,
        "title": "Sonata No. 37 in F minor",
        "author": "Antonio Brahms",
        "style": "Realism",
        "domain": "Music",
        "year": "1545",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Chiaroscuro",
            "Concerto",
            "Sonata"
        ]
    },
    {
        "id": 39,
        "title": "String Quartet No. 5 in D minor",
        "author": "Richard Vivaldi",
        "style": "Symbolism",
        "domain": "Music",
        "year": "1775",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Minimalism",
            "Surrealism",
            "Sonata"
        ]
    },
    {
        "id": 40,
        "title": "Sonata No. 35 in B minor",
        "author": "Antonio Tchaikovsky",
        "style": "Abstract",
        "domain": "Music",
        "year": "1770",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Color Field",
            "Chiaroscuro"
        ]
    },
    {
        "id": 41,
        "title": "Symphony No. 17 in G minor",
        "author": "Igor Wagner",
        "style": "Romanticism",
        "domain": "Music",
        "year": "1464",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Color Field"
        ]
    },
    {
        "id": 42,
        "title": "String Quartet No. 19 in C major",
        "author": "Pyotr Ilyich Vivaldi",
        "style": "Expressionism",
        "domain": "Music",
        "year": "1925",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Action Painting",
            "Fresco"
        ]
    },
    {
        "id": 43,
        "title": "Study of a Man 94",
        "author": "Titian Monet",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1821",
        "region": "Netherlands",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Serialism",
            "Color Field",
            "Opera"
        ]
    },
    {
        "id": 44,
        "title": "Study of a Lady 9",
        "author": "Wassily Kandinsky",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1834",
        "region": "Germany",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Oil on Canvas",
            "Counterpoint"
        ]
    },
    {
        "id": 45,
        "title": "Landscape of the City 97",
        "author": "Rembrandt Monet",
        "style": "Symbolism",
        "domain": "Fine Art",
        "year": "1627",
        "region": "France",
        "museum": "National Gallery (London)",
        "tags": [
            "Symphony",
            "Opera",
            "Oil on Canvas"
        ]
    },
    {
        "id": 46,
        "title": "String Quartet No. 24 in C minor",
        "author": "Johann Sebastian Wagner",
        "style": "Romanticism",
        "domain": "Music",
        "year": "1550",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Aleatory",
            "Cubism"
        ]
    },
    {
        "id": 47,
        "title": "String Quartet No. 13 in D major",
        "author": "Franz Chopin",
        "style": "Post-Impressionism",
        "domain": "Music",
        "year": "1829",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas",
            "Cubism",
            "Surrealism"
        ]
    },
    {
        "id": 48,
        "title": "Portrait of the City 22",
        "author": "Michelangelo Buonarroti",
        "style": "Expressionism",
        "domain": "Fine Art",
        "year": "1681",
        "region": "Spain",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Action Painting",
            "Polyphony"
        ]
    },
    {
        "id": 49,
        "title": "Portrait of a Lady 64",
        "author": "Titian Kandinsky",
        "style": "Renaissance",
        "domain": "Fine Art",
        "year": "1506",
        "region": "Italy",
        "museum": "Louvre Museum (Paris)",
        "tags": [
            "Tenebrism",
            "Serialism",
            "Concerto"
        ]
    },
    {
        "id": 50,
        "title": "Portrait of a Saint 5",
        "author": "Wassily Vecellio",
        "style": "Renaissance",
        "domain": "Fine Art",
        "year": "1924",
        "region": "UK",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Symphony",
            "Cubism"
        ]
    },
    {
        "id": 51,
        "title": "String Quartet No. 26 in C minor",
        "author": "Wolfgang Amadeus Vivaldi",
        "style": "Expressionism",
        "domain": "Music",
        "year": "1885",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Sonata",
            "Surrealism"
        ]
    },
    {
        "id": 52,
        "title": "Portrait of Nature 69",
        "author": "Raphael Monet",
        "style": "Viennese Classicism",
        "domain": "Fine Art",
        "year": "1795",
        "region": "Russia",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Polyphony",
            "Aleatory"
        ]
    },
    {
        "id": 53,
        "title": "String Quartet No. 29 in F major",
        "author": "Johannes Tchaikovsky",
        "style": "Neoclassicism",
        "domain": "Music",
        "year": "1867",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Sonata",
            "Polyphony",
            "Counterpoint"
        ]
    },
    {
        "id": 54,
        "title": "Study of a Musician 87",
        "author": "Michelangelo Cézanne",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1454",
        "region": "Spain",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Action Painting",
            "Surrealism",
            "Color Field"
        ]
    },
    {
        "id": 55,
        "title": "Landscape of a Man 61",
        "author": "Michelangelo Degas",
        "style": "Viennese Classicism",
        "domain": "Fine Art",
        "year": "1468",
        "region": "Netherlands",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Fresco",
            "Serialism"
        ]
    },
    {
        "id": 56,
        "title": "Symphony No. 3 in C minor",
        "author": "Claude Debussy",
        "style": "Post-Impressionism",
        "domain": "Music",
        "year": "1633",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Cubism",
            "Aleatory"
        ]
    },
    {
        "id": 57,
        "title": "String Quartet No. 23 in G minor",
        "author": "Pyotr Ilyich Wagner",
        "style": "Symbolism",
        "domain": "Music",
        "year": "1520",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas",
            "Serialism"
        ]
    },
    {
        "id": 58,
        "title": "Concerto No. 10 in D major",
        "author": "Johannes Mozart",
        "style": "Symbolism",
        "domain": "Music",
        "year": "1589",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Opera"
        ]
    },
    {
        "id": 59,
        "title": "String Quartet No. 18 in C major",
        "author": "Pyotr Ilyich Stravinsky",
        "style": "Post-Impressionism",
        "domain": "Music",
        "year": "1524",
        "region": "UK",
        "museum": "N/A",
        "tags": [
            "Minimalism",
            "Chiaroscuro",
            "Color Field"
        ]
    },
    {
        "id": 60,
        "title": "Symphony No. 11 in F minor",
        "author": "Johannes Brahms",
        "style": "Renaissance",
        "domain": "Music",
        "year": "1620",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas"
        ]
    },
    {
        "id": 61,
        "title": "Symphony No. 37 in A major",
        "author": "Antonio Stravinsky",
        "style": "Baroque",
        "domain": "Music",
        "year": "1495",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Color Field",
            "Symphony"
        ]
    },
    {
        "id": 62,
        "title": "Still Life of a Musician 18",
        "author": "Titian Kandinsky",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1547",
        "region": "Germany",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Oil on Canvas",
            "Action Painting",
            "Opera"
        ]
    },
    {
        "id": 63,
        "title": "Portrait of Nature 23",
        "author": "Gustav Kandinsky",
        "style": "Impressionism",
        "domain": "Fine Art",
        "year": "1805",
        "region": "Italy",
        "museum": "Prado Museum (Madrid)",
        "tags": [
            "Opera",
            "Oil on Canvas",
            "Concerto"
        ]
    },
    {
        "id": 64,
        "title": "Still Life of Nature 7",
        "author": "Michelangelo Monet",
        "style": "Expressionism",
        "domain": "Fine Art",
        "year": "1527",
        "region": "Spain",
        "museum": "Prado Museum (Madrid)",
        "tags": [
            "Tenebrism"
        ]
    },
    {
        "id": 65,
        "title": "Study of a Man 36",
        "author": "Titian Buonarroti",
        "style": "Romanticism",
        "domain": "Fine Art",
        "year": "1673",
        "region": "Italy",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Concerto",
            "Cubism"
        ]
    },
    {
        "id": 66,
        "title": "Portrait of a Musician 33",
        "author": "Rembrandt Vecellio",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1537",
        "region": "Italy",
        "museum": "National Gallery (London)",
        "tags": [
            "Oil on Canvas"
        ]
    },
    {
        "id": 67,
        "title": "String Quartet No. 31 in C minor",
        "author": "Wolfgang Amadeus Vivaldi",
        "style": "Neoclassicism",
        "domain": "Music",
        "year": "1448",
        "region": "France",
        "museum": "N/A",
        "tags": [
            "Chiaroscuro",
            "Tenebrism"
        ]
    },
    {
        "id": 68,
        "title": "Still Life of a Man 83",
        "author": "Paul Buonarroti",
        "style": "Realism",
        "domain": "Fine Art",
        "year": "1832",
        "region": "Germany",
        "museum": "MoMA (New York)",
        "tags": [
            "Oil on Canvas",
            "Tenebrism"
        ]
    },
    {
        "id": 69,
        "title": "Symphony No. 7 in D minor",
        "author": "Frederic Mozart",
        "style": "Renaissance",
        "domain": "Music",
        "year": "1594",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Color Field",
            "Fresco"
        ]
    },
    {
        "id": 70,
        "title": "Landscape of a Musician 54",
        "author": "Michelangelo Klimt",
        "style": "Symbolism",
        "domain": "Fine Art",
        "year": "1673",
        "region": "Netherlands",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Minimalism"
        ]
    },
    {
        "id": 71,
        "title": "Portrait of the City 10",
        "author": "Edgar Kandinsky",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1750",
        "region": "Netherlands",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Polyphony",
            "Action Painting"
        ]
    },
    {
        "id": 72,
        "title": "String Quartet No. 22 in F minor",
        "author": "Johann Sebastian Wagner",
        "style": "Post-Impressionism",
        "domain": "Music",
        "year": "1528",
        "region": "Spain",
        "museum": "N/A",
        "tags": [
            "Counterpoint"
        ]
    },
    {
        "id": 73,
        "title": "Sonata No. 4 in B minor",
        "author": "Pyotr Ilyich Stravinsky",
        "style": "Symbolism",
        "domain": "Music",
        "year": "1495",
        "region": "Netherlands",
        "museum": "N/A",
        "tags": [
            "Cubism",
            "Chiaroscuro"
        ]
    },
    {
        "id": 74,
        "title": "String Quartet No. 7 in F minor",
        "author": "Richard Bach",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1615",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Oil on Canvas",
            "Sonata",
            "Concerto"
        ]
    },
    {
        "id": 75,
        "title": "Concerto No. 3 in C major",
        "author": "Pyotr Ilyich Schubert",
        "style": "Neoclassicism",
        "domain": "Music",
        "year": "1665",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Fresco",
            "Sonata"
        ]
    },
    {
        "id": 76,
        "title": "Concerto No. 37 in E major",
        "author": "Claude Stravinsky",
        "style": "Renaissance",
        "domain": "Music",
        "year": "1606",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Counterpoint",
            "Cubism"
        ]
    },
    {
        "id": 77,
        "title": "Sonata No. 23 in A major",
        "author": "Antonio Vivaldi",
        "style": "Impressionism",
        "domain": "Music",
        "year": "1481",
        "region": "Germany",
        "museum": "N/A",
        "tags": [
            "Serialism",
            "Polyphony"
        ]
    },
    {
        "id": 78,
        "title": "String Quartet No. 7 in G major",
        "author": "Johannes Schubert",
        "style": "Abstract",
        "domain": "Music",
        "year": "1689",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Minimalism",
            "Counterpoint",
            "Polyphony"
        ]
    },
    {
        "id": 79,
        "title": "Portrait of Nature 31",
        "author": "Raphael Monet",
        "style": "Impressionism",
        "domain": "Fine Art",
        "year": "1739",
        "region": "Germany",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Counterpoint"
        ]
    },
    {
        "id": 80,
        "title": "String Quartet No. 35 in C major",
        "author": "Richard Tchaikovsky",
        "style": "Renaissance",
        "domain": "Music",
        "year": "1873",
        "region": "UK",
        "museum": "N/A",
        "tags": [
            "Action Painting",
            "Concerto"
        ]
    },
    {
        "id": 81,
        "title": "Concerto No. 15 in E major",
        "author": "Wolfgang Amadeus Mozart",
        "style": "Abstract",
        "domain": "Music",
        "year": "1805",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Aleatory",
            "Concerto",
            "Minimalism"
        ]
    },
    {
        "id": 82,
        "title": "Still Life of a Lady 57",
        "author": "Rembrandt Cézanne",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1811",
        "region": "Spain",
        "museum": "Louvre Museum (Paris)",
        "tags": [
            "Counterpoint",
            "Polyphony"
        ]
    },
    {
        "id": 83,
        "title": "Still Life of Nature 48",
        "author": "Raphael Picasso",
        "style": "Impressionism",
        "domain": "Fine Art",
        "year": "1556",
        "region": "Spain",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Sonata",
            "Oil on Canvas"
        ]
    },
    {
        "id": 84,
        "title": "Symphony No. 22 in F major",
        "author": "Igor Chopin",
        "style": "Expressionism",
        "domain": "Music",
        "year": "1657",
        "region": "UK",
        "museum": "N/A",
        "tags": [
            "Sonata",
            "Counterpoint",
            "Symphony"
        ]
    },
    {
        "id": 85,
        "title": "Landscape of a Lady 14",
        "author": "Claude Sanzio",
        "style": "Romanticism",
        "domain": "Fine Art",
        "year": "1575",
        "region": "Germany",
        "museum": "Louvre Museum (Paris)",
        "tags": [
            "Oil on Canvas",
            "Sonata"
        ]
    },
    {
        "id": 86,
        "title": "Study of a Musician 90",
        "author": "Gustav Cézanne",
        "style": "Romanticism",
        "domain": "Fine Art",
        "year": "1883",
        "region": "Germany",
        "museum": "Uffizi Gallery (Florence)",
        "tags": [
            "Aleatory"
        ]
    },
    {
        "id": 87,
        "title": "String Quartet No. 18 in G minor",
        "author": "Antonio Debussy",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1691",
        "region": "Netherlands",
        "museum": "N/A",
        "tags": [
            "Action Painting",
            "Opera",
            "Symphony"
        ]
    },
    {
        "id": 88,
        "title": "Symphony No. 17 in B major",
        "author": "Claude Brahms",
        "style": "Realism",
        "domain": "Music",
        "year": "1736",
        "region": "Italy",
        "museum": "N/A",
        "tags": [
            "Opera",
            "Chiaroscuro"
        ]
    },
    {
        "id": 89,
        "title": "Landscape of a Lady 29",
        "author": "Wassily Buonarroti",
        "style": "Expressionism",
        "domain": "Fine Art",
        "year": "1683",
        "region": "Russia",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Aleatory",
            "Action Painting"
        ]
    },
    {
        "id": 90,
        "title": "String Quartet No. 3 in C major",
        "author": "Igor Tchaikovsky",
        "style": "Romanticism",
        "domain": "Music",
        "year": "1423",
        "region": "Netherlands",
        "museum": "N/A",
        "tags": [
            "Concerto",
            "Action Painting",
            "Tenebrism"
        ]
    },
    {
        "id": 91,
        "title": "Landscape of a Saint 16",
        "author": "Claude Sanzio",
        "style": "Post-Impressionism",
        "domain": "Fine Art",
        "year": "1878",
        "region": "Russia",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Aleatory"
        ]
    },
    {
        "id": 92,
        "title": "Sonata No. 40 in D minor",
        "author": "Antonio Brahms",
        "style": "Post-Impressionism",
        "domain": "Music",
        "year": "1837",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Color Field"
        ]
    },
    {
        "id": 93,
        "title": "Portrait of a Lady 45",
        "author": "Edgar Buonarroti",
        "style": "Baroque",
        "domain": "Fine Art",
        "year": "1490",
        "region": "Russia",
        "museum": "Metropolitan Museum of Art (NY)",
        "tags": [
            "Fresco",
            "Serialism",
            "Polyphony"
        ]
    },
    {
        "id": 94,
        "title": "String Quartet No. 23 in D minor",
        "author": "Claude Wagner",
        "style": "Neoclassicism",
        "domain": "Music",
        "year": "1589",
        "region": "Russia",
        "museum": "N/A",
        "tags": [
            "Tenebrism",
            "Chiaroscuro"
        ]
    },
    {
        "id": 95,
        "title": "Study of Nature 9",
        "author": "Edgar Vecellio",
        "style": "Abstract",
        "domain": "Fine Art",
        "year": "1755",
        "region": "Russia",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Serialism",
            "Chiaroscuro"
        ]
    },
    {
        "id": 96,
        "title": "Sonata No. 35 in E major",
        "author": "Johannes Stravinsky",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1820",
        "region": "France",
        "museum": "N/A",
        "tags": [
            "Cubism",
            "Minimalism",
            "Tenebrism"
        ]
    },
    {
        "id": 97,
        "title": "Portrait of a Man 17",
        "author": "Edgar Klimt",
        "style": "Modern",
        "domain": "Fine Art",
        "year": "1601",
        "region": "Netherlands",
        "museum": "Art Institute of Chicago",
        "tags": [
            "Counterpoint",
            "Color Field"
        ]
    },
    {
        "id": 98,
        "title": "Symphony No. 19 in D major",
        "author": "Antonio Mozart",
        "style": "Modern",
        "domain": "Music",
        "year": "1651",
        "region": "Austria",
        "museum": "N/A",
        "tags": [
            "Sonata",
            "Surrealism",
            "Action Painting"
        ]
    },
    {
        "id": 99,
        "title": "Symphony No. 7 in E major",
        "author": "Claude Chopin",
        "style": "Viennese Classicism",
        "domain": "Music",
        "year": "1432",
        "region": "France",
        "museum": "N/A",
        "tags": [
            "Cubism",
            "Symphony"
        ]
    },
    {
        "id": 100,
        "title": "Landscape of the City 60",
        "author": "Rembrandt Degas",
        "style": "Impressionism",
        "domain": "Fine Art",
        "year": "1923",
        "region": "France",
        "museum": "Rijksmuseum (Amsterdam)",
        "tags": [
            "Serialism"
        ]
    }
];
