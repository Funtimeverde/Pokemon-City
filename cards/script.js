// Últimas actualizaciones:
// - Toggle de fan names con animación de deslizamiento y opacidad.
// - Badge de tipo con fondo negro translúcido y texto blanco legible.
// - Multilenguaje: japonés, inglés, español y coreano.
// - Estructura lista para añadir nuevos Pokémon a tu ritmo.
// Array de datos de Eeveevolutions Teracristal EX con Fan-Names
// Agrega más Pokémon copiando uno de los objetos y cambiando:
// nameJa, nameEn, nameEs, nameKo, fanName, typeJa, typeEn, typeEs, typeKo, typeCode, hp, attack, defense, number, emoji
const pokemonCards = [
    {
        nameJa: 'イーブイ',
        nameEn: 'Eevee',
        nameEs: 'Eevee',
        nameKo: '이브이',
        fanName: 'Eboi',
        type: 'ノーマル',
        typeEn: 'Normal',
        typeEs: 'Normal',
        typeKo: '노말',
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
        nameKo: '샤미드',
        fanName: 'Vapy',
        type: 'みず',
        typeEn: 'Water',
        typeEs: 'Agua',
        typeKo: '물',
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
        nameKo: '쥬피썬',
        fanName: 'Bobolteon',
        type: 'でんき',
        typeEn: 'Electric',
        typeEs: 'Eléctrico',
        typeKo: '전기',
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
        nameKo: '부스터',
        fanName: 'Flary',
        type: 'ほのお',
        typeEn: 'Fire',
        typeEs: 'Fuego',
        typeKo: '불',
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
        nameKo: '에스퍼',
        fanName: 'Espy',
        type: 'エスパー',
        typeEn: 'Psychic',
        typeEs: 'Psíquico',
        typeKo: '에스퍼',
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
        nameKo: '블래키',
        fanName: 'Umbre',
        type: 'あく',
        typeEn: 'Dark',
        typeEs: 'Oscuro',
        typeKo: '악',
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
        nameKo: '글레이시아',
        fanName: 'La Hielo',
        type: 'こおり',
        typeEn: 'Ice',
        typeEs: 'Hielo',
        typeKo: '얼음',
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
        nameKo: '리피아',
        fanName: 'Lechuga',
        type: 'くさ',
        typeEn: 'Grass',
        typeEs: 'Planta',
        typeKo: '풀',
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
        nameKo: '니인피아',
        fanName: 'Lazos',
        type: 'フェアリー',
        typeEn: 'Fairy',
        typeEs: 'Hada',
        typeKo: '페어리',
        typeJa: 'フェアリー',
        typeCode: 'fairy',
        hp: 190,
        attack: 160,
        defense: 170,
        number: 700,
        emoji: '💫'
    }
    // Ejemplo de nuevo Pokémon:
    // {
    //     nameJa: 'ピカチュウ',
    //     nameEn: 'Pikachu',
    //     nameEs: 'Pikachu',
    //     nameKo: '피카츄',
    //     fanName: 'Pika',
    //     type: 'でんき',
    //     typeEn: 'Electric',
    //     typeEs: 'Eléctrico',
    //     typeKo: '전기',
    //     typeJa: 'でんき',
    //     typeCode: 'electric',
    //     hp: 120,
    //     attack: 110,
    //     defense: 70,
    //     number: 25,
    //     emoji: '⚡'
    // }
];

let currentLanguage = 'ja';
let showFanNames = false;
let currentTheme = localStorage.getItem('eeveelutions-theme') || 'light';
const STORAGE_KEY = 'eeveelutions-theme';

function getPokemonImageUrl(number, theme = 'light') {
    const variant = theme === 'dark' ? 'shiny' : 'official-artwork';
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${variant}/${number}.png`;
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
            footer: '© ポケモンシティ - イーブイ進化系 TCG',
            pageTitle: 'ポケモン TCG イーブイ進化系'
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
            footer: '© Pokémon City - Eeveelutions TCG',
            pageTitle: 'Pokémon TCG Eeveelutions'
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
            footer: '© Pokémon City - Eeveelutions TCG',
            pageTitle: 'Pokémon TCG Eeveelutions'
        },
        ko: {
            hp: 'HP',
            attack: '공격',
            defense: '방어',
            number: 'No.',
            fanName: '팬 네임',
            title: '✨ 포켓몬 TCG 이브이 진화군 ✨',
            subtitle: '인터랙티브한 이브이 진화 카드',
            toggle: '팬 네임 표시',
            footer: '© 포켓몬 시티 - 이브이 진화 TCG',
            pageTitle: '포켓몬 TCG 이브이 진화군'
        }
    };
    return labels[lang] || labels.es;
}

function translatePageText(labels) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        const value = labels[key];
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });
}

function getNameByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.nameJa;
    if (lang === 'en') return pokemon.nameEn;
    if (lang === 'ko') return pokemon.nameKo || pokemon.nameEn;
    return pokemon.nameEs;
}

function getTypeByLanguage(pokemon, lang) {
    if (lang === 'ja') return pokemon.typeJa;
    if (lang === 'en') return pokemon.typeEn;
    if (lang === 'ko') return pokemon.typeKo || pokemon.typeEn;
    return pokemon.typeEs;
}

function createCard(pokemon, lang) {
    const labels = getLabels(lang);
    const name = getNameByLanguage(pokemon, lang);
    const type = getTypeByLanguage(pokemon, lang);
    const fanNameClass = showFanNames ? '' : 'hidden';
    const cardClasses = ['card-front', `type-${pokemon.typeCode}`, pokemon.specialClass].filter(Boolean).join(' ');
    const imageUrl = getPokemonImageUrl(pokemon.number, currentTheme);

    return `
        <div class="tcg-card" role="button" tabindex="0" aria-label="${name} card">
            <div class="card-inner">
                <div class="${cardClasses}">
                    <div class="card-header">
                        <div class="pokemon-name">${name}</div>
                        <div class="card-type">${type}</div>
                    </div>
                    <div class="fan-name-section ${fanNameClass}">
                        <span class="fan-name-label">${labels.fanName}:</span>
                        <span class="fan-name-value">${pokemon.fanName}</span>
                    </div>
                    <div class="card-image">
                        <img src="${imageUrl}" alt="${pokemon.nameEn}" class="pokemon-img">
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

function renderCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;

    container.innerHTML = pokemonCards.map((pokemon) => createCard(pokemon, currentLanguage)).join('');
    attachFlipListeners();
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    const labels = getLabels(lang);
    translatePageText(labels);
    document.title = labels.pageTitle || labels.title;

    renderCards();

    document.querySelectorAll('.language-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function setTheme(theme) {
    currentTheme = theme;
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
        const icon = themeToggle.querySelector('.theme-toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    localStorage.setItem(STORAGE_KEY, theme);
    renderCards();
}

// toggleFanNames: activa o desactiva la sección de nombres de fan en cada carta.
// Cuando el usuario cambia el checkbox, se actualiza `showFanNames` y se agrega/quita
// la clase `hidden` en cada sección `fan-name-section`.
// El estilo CSS asociado define la animación de desplazamiento, opacidad y altura.
function toggleFanNames(checkbox) {
    showFanNames = checkbox.checked;
    document.querySelectorAll('.fan-name-section').forEach((section) => {
        section.classList.toggle('hidden', !showFanNames);
    });
}

function attachFlipListeners() {
    document.querySelectorAll('.tcg-card').forEach((card) => {
        const flipCard = () => {
            const cardInner = card.querySelector('.card-inner');
            if (!cardInner) return;
            cardInner.style.transform =
                cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        };

        card.addEventListener('click', flipCard);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                flipCard();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const fanNameToggle = document.getElementById('fanNameToggle');
    const languageButtons = document.querySelectorAll('.language-btn');
    const themeToggle = document.getElementById('themeToggle');

    languageButtons.forEach((btn) => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            }
        });
    }

    if (fanNameToggle) {
        fanNameToggle.addEventListener('change', () => toggleFanNames(fanNameToggle));
        fanNameToggle.checked = false;
    }

    setTheme(currentTheme);
    changeLanguage(currentLanguage);
});