// Array de datos de Eeveevolutions Teracristal EX
const pokemonCards = [
    {
        name: "イーブイ",
        nameEn: "Eevee",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 150,
        attack: 130,
        defense: 120,
        number: 133,
        emoji: "🎴"
    },
    {
        name: "シャワーズ",
        nameEn: "Vaporeon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 180,
        attack: 145,
        defense: 160,
        number: 134,
        emoji: "💧"
    },
    {
        name: "サンダース",
        nameEn: "Jolteon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 170,
        attack: 190,
        defense: 140,
        number: 135,
        emoji: "⚡"
    },
    {
        name: "ブースター",
        nameEn: "Flareon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 175,
        attack: 190,
        defense: 140,
        number: 136,
        emoji: "🔥"
    },
    {
        name: "エーフィ",
        nameEn: "Espeon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 185,
        attack: 160,
        defense: 175,
        number: 196,
        emoji: "✨"
    },
    {
        name: "ブラッキー",
        nameEn: "Umbreon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 190,
        attack: 155,
        defense: 190,
        number: 197,
        emoji: "🌙"
    },
    {
        name: "グレイシア",
        nameEn: "Glaceon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 175,
        attack: 170,
        defense: 165,
        number: 471,
        emoji: "❄️"
    },
    {
        name: "リーフィア",
        nameEn: "Leafeon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 180,
        attack: 175,
        defense: 165,
        number: 470,
        emoji: "🍃"
    },
    {
        name: "ニンフィア",
        nameEn: "Sylveon",
        type: "テラスタル",
        typeJa: "テラスタル",
        hp: 190,
        attack: 160,
        defense: 170,
        number: 700,
        emoji: "💫"
    }
];

// Función para generar la URL de imagen de PokeAPI
function getPokemonImageUrl(number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
}

// Función para crear una tarjeta
function createCard(pokemon) {
    return `
        <div class="tcg-card">
            <div class="card-inner">
                <div class="card-front">
                    <div class="terastal-badge">テラスタル</div>
                    <div class="sar-badge">SAR EX</div>
                    <div class="ex-badge">EX</div>
                    <div class="card-header">
                        <div class="pokemon-name">${pokemon.name}</div>
                        <div class="card-type">${pokemon.typeJa}</div>
                    </div>
                    <div class="card-image">
                        <img src="${getPokemonImageUrl(pokemon.number)}" alt="${pokemon.nameEn}" class="pokemon-img">
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="stat-label">HP</div>
                            <div class="stat-value">${pokemon.hp}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">こうげき</div>
                            <div class="stat-value">${pokemon.attack}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">ぼうぎょ</div>
                            <div class="stat-value">${pokemon.defense}</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span class="pokemon-number">No. ${pokemon.number}</span>
                        <span class="rarity">SAR</span>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-back-content">
                        <div class="card-back-logo">${pokemon.emoji}</div>
                        <div class="card-back-text">${pokemon.name}</div>
                        <div class="card-back-text">${pokemon.typeJa} タイプ</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generar todas las tarjetas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cardsContainer');
    
    // Generar HTML de todas las tarjetas
    const cardsHTML = pokemonCards.map(pokemon => createCard(pokemon)).join('');
    container.innerHTML = cardsHTML;
    
    // Agregar funcionalidad de flip a todas las tarjetas
    const cards = document.querySelectorAll('.tcg-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardInner = this.querySelector('.card-inner');
            cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        });
    });
});