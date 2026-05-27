// Array de datos de Eeveevolutions Teracristal EX con Fan-Names
const pokemonCards = [
    {
        nameJa: "イーブイ",
        nameEn: "Eevee",
        nameEs: "Eevee",
        fanName: "Evoi",
        type: "ノーマル",
        typeEn: "Normal",
        typeEs: "Normal",
        typeJa: "ノーマル",
        typeCode: "normal",
        hp: 150,
        attack: 130,
        defense: 120,
        number: 133,
        emoji: "🎴"
    },
    {
        nameJa: "シャワーズ",
        nameEn: "Vaporeon",
        nameEs: "Vaporeon",
        fanName: "Vapp",
        type: "みず",
        typeEn: "Water",
        typeEs: "Agua",
        typeJa: "みず",
        typeCode: "water",
        hp: 180,
        attack: 145,
        defense: 160,
        number: 134,
        emoji: "💧"
    },
    {
        nameJa: "サンダース",
        nameEn: "Jolteon",
        nameEs: "Jolteon",
        fanName: "Enchufe",
        type: "でんき",
        typeEn: "Electric",
        typeEs: "Eléctrico",
        typeJa: "でんき",
        typeCode: "electric",
        hp: 170,
        attack: 190,
        defense: 140,
        number: 135,
        emoji: "⚡"
    },
    {
        nameJa: "ブースター",
        nameEn: "Flareon",
        nameEs: "Flareon",
        fanName: "Flary",
        type: "ほのお",
        typeEn: "Fire",
        typeEs: "Fuego",
        typeJa: "ほのお",
        typeCode: "fire",
        hp: 175,
        attack: 190,
        defense: 140,
        number: 136,
        emoji: "🔥"
    },
    {
        nameJa: "エーフィ",
        nameEn: "Espeon",
        nameEs: "Espeon",
        fanName: "Gema Psi",
        type: "エスパー",
        typeEn: "Psychic",
        typeEs: "Psíquico",
        typeJa: "エスパー",
        typeCode: "psychic",
        hp: 185,
        attack: 160,
        defense: 175,
        number: 196,
        emoji: "✨"
    },
    {
        nameJa: "ブラッキー",
        nameEn: "Umbreon",
        nameEs: "Umbreon",
        fanName: "Umbre",
        type: "あく",
        typeEn: "Dark",
        typeEs: "Oscuro",
        typeJa: "あく",
        typeCode: "dark",
        hp: 190,
        attack: 155,
        defense: 190,
        number: 197,
        emoji: "🌙"
    },
    {
        nameJa: "グレイシア",
        nameEn: "Glaceon",
        nameEs: "Glaceon",
        fanName: "La Hielo",
        type: "こおり",
        typeEn: "Ice",
        typeEs: "Hielo",
        typeJa: "こおり",
        typeCode: "ice",
        hp: 175,
        attack: 170,
        defense: 165,
        number: 471,
        emoji: "❄️"
    },
    {
        nameJa: "リーフィア",
        nameEn: "Leafeon",
        nameEs: "Leafeon",
        fanName: "Lechuga",
        type: "くさ",
        typeEn: "Grass",
        typeEs: "Planta",
        typeJa: "くさ",
        typeCode: "grass",
        hp: 180,
        attack: 175,
        defense: 165,
        number: 470,
        emoji: "🍃"
    },
    {
        nameJa: "ニンフィア",
        nameEn: "Sylveon",
        nameEs: "Sylveon",
        fanName: "Lazos",
        type: "フェアリー",
        typeEn: "Fairy",
        typeEs: "Hada",
        typeJa: "フェアリー",
        typeCode: "fairy",
        hp: 190,
        attack: 160,
        defense: 170,
        number: 700,
        emoji: "💫"
    }
];

// Variable global para idioma actual
let currentLanguage = 'ja'; // 'ja' (Japonés), 'en' (Inglés), 'es' (Español)
let showFanNames = false; // Variable para control de fan-names

// Función para obtener la URL de imagen de PokeAPI
function getPokemonImageUrl(number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
}

// Función para obtener el nombre según el idioma
function getNameByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.nameJa;
    if (lang === 'en') return pokemon.nameEn;
    if (lang === 'es') return pokemon.nameEs;
}

// Función para obtener el tipo según el idioma
function getTypeByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.typeJa;
    if (lang === 'en') return pokemon.typeEn;
    if (lang === 'es') return pokemon.typeEs;
}

// Función para obtener etiquetas según el idioma
function getLabels(lang) {
    const labels = {
        ja: {
            hp: 'HP',
            attack: 'こうげき',
            defense: 'ぼうぎょ',
            number: 'No.',
            fanName: 'ファンネーム',
            clickToFlip: 'カードをクリックしてターン'
        },
        en: {
            hp: 'HP',
            attack: 'Attack',
            defense: 'Defense',
            number: 'No.',
            fanName: 'Fan Name',
            clickToFlip: 'Click card to flip'
        },
        es: {
            hp: 'PV',
            attack: 'Ataque',
            defense: 'Defensa',
            number: 'No.',
            fanName: 'Nombre Fans',
            clickToFlip: 'Haz clic para girar'
        }
    };
    return labels[lang] || labels['ja'];
}

// Función para crear una tarjeta
function createCard(pokemon, lang) {
    const labels = getLabels(lang);
    const name = getNameByLanguage(pokemon, lang);
    const type = getTypeByLanguage(pokemon, lang);
    const fanNameClass = showFanNames ? '' : 'hidden';
    
    return `
        <div class="tcg-card">
            <div class="card-inner">
                <div class="card-front type-${pokemon.typeCode}">
                    <div class="terastal-badge">テラスタル</div>
                    <div class="sar-badge">SAR EX</div>
                    <div class="ex-badge">EX</div>
                    <div class="card-header">
                        <div class="pokemon-name">${name}</div>
                        <div class="card-type">${type}</div>
                    </div>
                    <div class="fan-name-section ${fanNameClass}">
                        <span class="fan-name-label">${labels.fanName}:</span>
                        <span class="fan-name-value">${pokemon.fanName}</span>
                    </div>
                    <div class="card-image">
                        <img src="${getPokemonImageUrl(pokemon.number)}" alt="${pokemon.nameEn}" class="pokemon-img">
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="stat-label">${labels.hp}</div>
                            <div class="stat-value">${pokemon.hp}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">${labels.attack}</div>
                            <div class="stat-value">${pokemon.attack}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">${labels.defense}</div>
                            <div class="stat-value">${pokemon.defense}</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span class="pokemon-number">${labels.number} ${pokemon.number}</span>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-back-content">
                        <div class="card-back-text">${name}</div>
                        <div class="card-back-text">${type}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    const container = document.getElementById('cardsContainer');
    const cardsHTML = pokemonCards.map(pokemon => createCard(pokemon, lang)).join('');
    container.innerHTML = cardsHTML;
    attachFlipListeners();
    
    // Actualizar botones de idioma
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Función para toggle de fan-names
function toggleFanNames(checkbox) {
    showFanNames = checkbox.checked;
    const fanNameSections = document.querySelectorAll('.fan-name-section');
    fanNameSections.forEach(section => {
        if (showFanNames) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Función para agregar listeners de flip
function attachFlipListeners() {
    const cards = document.querySelectorAll('.tcg-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardInner = this.querySelector('.card-inner');
            cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        });
    });
}

// Generar todas las tarjetas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cardsContainer');
    const cardsHTML = pokemonCards.map(pokemon => createCard(pokemon, 'ja')).join('');
    container.innerHTML = cardsHTML;
    attachFlipListeners();
    
    // Marcar botón de idioma activo
    document.querySelector('[data-lang="ja"]').classList.add('active');
    
    // Inicializar checkbox
    document.getElementById('fanNameToggle').checked = false;
});