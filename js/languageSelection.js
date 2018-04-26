import { GB, CN, DE, ES, FR, IT, JP, KR, MX, RU } from './translations';

export const map = {
    'gb': GB,
    'cn': CN,
    'de': DE,
    'es': ES,
    'fr': FR,
    'it': IT,
    'jp': JP,
    'kr': KR,
    'mx': MX,
    'ru': RU
}

const updateLanguage = code => {
    ['title', 'mainSubtitle', 'subtitle'].forEach(el => {
        document.getElementById(el).textContent = map[code][el];
    })
}

// Need babel for this to work in IE
Array.from(document.querySelectorAll('.flag'))
    .forEach(flag => {
        flag.addEventListener('click', ({ target }) => {
            updateLanguage(target.dataset.code)
        })
    })