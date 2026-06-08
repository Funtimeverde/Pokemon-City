// Array de datos de Eeveevolutions Teracristal EX con Fan-Names
const pokemonCards = [
    {
        nameJa: 'イーブイ',
        nameEn: 'Eevee',
        nameEs: 'Eevee',
        fanName: 'Eboi',
        type: 'ノーマル',
        typeEn: 'Normal',
        typeEs: 'Normal',
        typeJa: 'ノーマル',
        typeCode: 'normal',
        specialClass: 'teracristal',
        hp: 150,
        attack: 130,
        defense: 120,
        number: 133,
        emoji: '🎴'
    },
    {
        nameJa: 'シャワーズ',
        nameEn: 'Vaporeon',
        nameEs: 'Vaporeon',
        fanName: 'Vapy',
        type: 'みず',
        typeEn: 'Water',
        typeEs: 'Agua',
        typeJa: 'みず',
        typeCode: 'water',
        hp: 180,
        attack: 145,
        defense: 160,
        number: 134,
        emoji: '💧'
    },
    {
        nameJa: 'サンダース',
        nameEn: 'Jolteon',
        nameEs: 'Jolteon',
        fanName: 'Bobolteon',
        type: 'でんき',
        typeEn: 'Electric',
        typeEs: 'Eléctrico',
        typeJa: 'でんき',
        typeCode: 'electric',
        hp: 170,
        attack: 190,
        defense: 140,
        number: 135,
        emoji: '⚡'
    },
    {
        nameJa: 'ブースター',
        nameEn: 'Flareon',
        nameEs: 'Flareon',
        fanName: 'Flary',
        type: 'ほのお',
        typeEn: 'Fire',
        typeEs: 'Fuego',
        typeJa: 'ほのお',
        typeCode: 'fire',
        hp: 175,
        attack: 190,
        defense: 140,
        number: 136,
        emoji: '🔥'
    },
    {
        nameJa: 'エーフィ',
        nameEn: 'Espeon',
        nameEs: 'Espeon',
        fanName: 'Espy',
        type: 'エスパー',
        typeEn: 'Psychic',
        typeEs: 'Psíquico',
        typeJa: 'エスパー',
        typeCode: 'psychic',
        hp: 185,
        attack: 160,
        defense: 175,
        number: 196,
        emoji: '✨'
    },
    {
        nameJa: 'ブラッキー',
        nameEn: 'Umbreon',
        nameEs: 'Umbreon',
        fanName: 'Umbre',
        type: 'あく',
        typeEn: 'Dark',
        typeEs: 'Oscuro',
        typeJa: 'あく',
        typeCode: 'dark',
        hp: 190,
        attack: 155,
        defense: 190,
        number: 197,
        emoji: '🌙'
    },
    {
        nameJa: 'グレイシア',
        nameEn: 'Glaceon',
        nameEs: 'Glaceon',
        fanName: 'La Hielo',
        type: 'こおり',
        typeEn: 'Ice',
        typeEs: 'Hielo',
        typeJa: 'こおり',
        typeCode: 'ice',
        hp: 175,
        attack: 170,
        defense: 165,
        number: 471,
        emoji: '❄️'
    },
    {
        nameJa: 'リーフィア',
        nameEn: 'Leafeon',
        nameEs: 'Leafeon',
        fanName: 'Lechuga',
        type: 'くさ',
        typeEn: 'Grass',
        typeEs: 'Planta',
        typeJa: 'くさ',
        typeCode: 'grass',
        hp: 180,
        attack: 175,
        defense: 165,
        number: 470,
        emoji: '🍃'
    },
    {
        nameJa: 'ニンフィア',
        nameEn: 'Sylveon',
        nameEs: 'Sylveon',
        fanName: 'Lazos',
        type: 'フェアリー',
        typeEn: 'Fairy',
        typeEs: 'Hada',
        typeJa: 'フェアリー',
        typeCode: 'fairy',
        hp: 190,
        attack: 160,
        defense: 170,
        number: 700,
        emoji: '💫'
    }
];

let currentLanguage = 'es';
let showFanNames = false;

function getPokemonImageUrl(number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
}

function getLabels(lang) {
    const labels = {
        ja: {
            hp: 'HP',
            attack: 'こうげき',
            defense: 'ぼうぎょ',
            number: 'No.',
            fanName: 'ファンネーム',
            title: '✨ ポケモン TCG イーブイ進化系 ✨',
            subtitle: 'イーブイ進化系のインタラクティブカード',
            toggle: 'ファンネームを表示',
            footer: '© ポケモンシティ - イーブイ進化系 TCG'
        },
        en: {
            hp: 'HP',
            attack: 'Attack',
            defense: 'Defense',
            number: 'No.',
            fanName: 'Fan Name',
            title: '✨ Pokémon TCG Eeveelutions ✨',
            subtitle: 'Interactive Eeveelutions cards',
            toggle: 'Show fan names',
            footer: '© Pokémon City - Eeveelutions TCG'
        },
        es: {
            hp: 'PV',
            attack: 'Ataque',
            defense: 'Defensa',
            number: 'No.',
            fanName: 'Nombre Fans',
            title: '✨ Pokémon TCG Eeveelutions ✨',
            subtitle: 'Cartas interactivas de Eeveelutions',
            toggle: 'Mostrar fan names',
            footer: '© Pokémon City - Eeveelutions TCG'
        }
    };
    return labels[lang] || labels.es;
}

function getNameByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.nameJa;
    if (lang === 'en') return pokemon.nameEn;
    return pokemon.nameEs;
}

function getTypeByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.typeJa;
    if (lang === 'en') return pokemon.typeEn;
    return pokemon.typeEs;
}

function createCard(pokemon, lang) {
    const labels = getLabels(lang);
    const name = getNameByLanguage(pokemon, lang);
    const type = getTypeByLanguage(pokemon, lang);
    const fanNameClass = showFanNames ? '' : 'hidden';
    const cardClasses = ['card-front', `type-${pokemon.typeCode}`, pokemon.specialClass].filter(Boolean).join(' ');

    return `
        <div class="tcg-card">
            <div class="card-inner">
                <div class="${cardClasses}">
                    <div class="card-header">
                        <div class="pokemon-name">${name}</div>
                        <div class="card-type type-${pokemon.typeCode}">${type}</div>
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
                        <div class="card-back-logo">${pokemon.emoji}</div>
                        <div class="card-back-text">${name}</div>
                        <div class="card-back-text">${type}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    const labels = getLabels(lang);
    document.querySelector('.header h1').textContent = labels.title;
    document.querySelector('.header p').textContent = labels.subtitle;
    document.querySelector('.toggle span').textContent = labels.toggle;
    document.querySelector('.footer p').textContent = labels.footer;

    const container = document.getElementById('cardsContainer');
    container.innerHTML = pokemonCards.map((pokemon) => createCard(pokemon, lang)).join('');
    attachFlipListeners();

    document.querySelectorAll('.language-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function toggleFanNames(checkbox) {
    showFanNames = checkbox.checked;
    document.querySelectorAll('.fan-name-section').forEach((section) => {
        section.classList.toggle('hidden', !showFanNames);
    });
}

function attachFlipListeners() {
    document.querySelectorAll('.tcg-card').forEach((card) => {
        card.addEventListener('click', function () {
            const cardInner = this.querySelector('.card-inner');
            cardInner.style.transform =
                cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const fanNameToggle = document.getElementById('fanNameToggle');

    document.querySelectorAll('.language-btn').forEach((btn) => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });

    fanNameToggle.addEventListener('change', () => toggleFanNames(fanNameToggle));
    changeLanguage(currentLanguage);
    fanNameToggle.checked = false;
});