window.addEventListener('DOMContentLoaded', (event) => {
    const replacements = {
        'ä': 'a', 'ö': 'o', 'ü': 'u', 'ß': '',
        'Ä': 'A', 'Ö': 'O', 'Ü': 'U',
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'å': 'a', 'ā': 'a',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ē': 'e',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ī': 'i',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ø': 'o', 'ō': 'o',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ū': 'u',
        'ç': 'c', 'ñ': 'n'
    };

    function replaceAccents(str) {
        return str.split('').map(char => replacements[char] !== undefined ? replacements[char] : char).join('');
    }

    document.querySelectorAll('a[href]').forEach((link) => {
        let href = link.getAttribute('href');
        if (href && href.includes('#')) {
            let parts = href.split('#');
            let newHref = parts[0] + '#' + replaceAccents(parts[1]);
            link.setAttribute('href', newHref);
        }
    });
});