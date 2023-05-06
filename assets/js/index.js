function terraform() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const em = w * 0.014;
    let d = 0;

    if (w > h) {
        if ((w - h) > w / 4) {
            d = w / 2 - em;
            d > (h - em) ? d = (h - em) : null;
        } else {
            d = h - em;
        }
    } else {
        d = w - em;
    }

    document.body.style.fontSize = `${em}px`;
    const nav = document.querySelector('main');
    nav.style.height = `${d}px`;
    nav.style.width = `${d}px`;
    nav.style.top = `${(h - d) / 2}px`;
    nav.style.marginLeft = `${d * (-0.5)}px`;
    const hexSize = `${d / 3}px`;
    const hexFontSize = `${d / 45}px`;


    ['#about', '#research', '#work', '#groups', '#masters', '#forum', '#support', '#contacts'].forEach(selector => {
        const hex = document.querySelector(selector);
        hex.style.height = hexSize;
        hex.style.width = hexSize;
        hex.style.lineHeight = hexSize;
        hex.style.fontSize = hexFontSize;

        if (selector === '#about') {
            hex.style.left = `${d / 11}px`;
            hex.style.top = `-${d / 15}px`;
        } else if (selector === '#research') {
            hex.style.left = `-${d / 10}px`;
            hex.style.top = `${d / 6}px`;
        } else if (selector === '#work') {
            hex.style.left = `-${d / 10}px`;
            hex.style.top = `${d / 2.1}px`;
        } else if (selector === '#groups') {
            hex.style.left = `${d / 11}px`;
            hex.style.top = `${d / 1.4}px`;
        } else if (selector === '#masters') {
            hex.style.right = `${d / 11}px`;
            hex.style.top = `-${d / 15}px`;
        } else if (selector === '#forum') {
            hex.style.right = `-${d / 10}px`;
            hex.style.top = `${d / 6}px`;
        } else if (selector === '#support') {
            hex.style.right = `-${d / 10}px`;
            hex.style.top = `${d / 2.1}px`;
        } else if (selector === '#contacts') {
            hex.style.right = `${d / 11}px`;
            hex.style.top = `${d / 1.4}px`;
        }
    });
}

window.onresize = terraform;
window.onload = terraform;
