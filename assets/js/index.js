const labels = {
    ru:{
        about: {
            tooltip: "О нас...",
            label: "О нас...",
            href: "pages/ru/about"
        },
        research: {
            tooltip: "Направления исследований",
            label: "Исследования",
            href: "pages/ru/research"
        },
        work: {
            tooltip: "Направления работы",
            label: "Услуги",
            href: "pages/ru/work"
        },
        groups: {
            tooltip: "Группы и тренинги",
            label: "Тренинги",
            href: "pages/ru/work"
        },
        masters: {
            tooltip: "Наши мастера",
            label: "Наши мастера",
            href: "pages/ru/masters"
        },
        forum: {
            tooltip: "Форум",
            label: "Форум",
            href: "https://www.facebook.com/groups/ecorr/"
        },
        support: {
            tooltip: "Информация",
            label: "Информация",
            href: "pages/ru/faq"
        },
        contacts: {
            tooltip: "Контакты",
            label: "Контакты",
            href: "pages/ru/contacts"
        }
    },
    ua:{
        about: {
            tooltip: "Про нас...",
            label: "Про нас...",
            href: "pages/ua/about"
        },
        research: {
            tooltip: "Напрямки досліджень",
            label: "Дослідження",
            href: "pages/ua/research"
        },
        work: {
            tooltip: "Напрямки роботи",
            label: "Послуги",
            href: "pages/ua/work"
        },
        groups: {
            tooltip: "Групи та тренінги",
            label: "Тренінги",
            href: "pages/ua/work"
        },
        masters: {
            tooltip: "Наші майстри",
            label: "Наші майстри",
            href: "pages/ua/masters"
        },
        forum: {
            tooltip: "Форум",
            label: "Форум",
            href: "https://www.facebook.com/groups/ecorr/"
        },
        support: {
            tooltip: "Інформація",
            label: "Інформація",
            href: "pages/ua/faq"
        },
        contacts: {
            tooltip: "Контакти",
            label: "Контакти",
            href: "pages/ua/contacts"
        }
    }
}

function terraform() {

    setLanguage();

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

function setLanguage(){
    document.querySelectorAll('.language-switch img') .forEach(link =>{
        link.onclick = switchLanguage(link.id);
        link.classList.remove("active");
    })

    let lang = localStorage.getItem("lang");
    if(!["ru", "ua"].includes(lang)){
        lang = "ua";
    }

    document.getElementById(lang).classList.add("active");

    document.documentElement.setAttribute("lang", lang);

    Object.keys(labels[lang]).forEach(lbl=>{
        document.getElementById(lbl).title = labels[lang][lbl].tooltip;
        document.getElementById(lbl).innerText = labels[lang][lbl].label;
        document.getElementById(lbl).href = labels[lang][lbl].href;
    })
}

function switchLanguage(lang) {return () =>{
    localStorage.setItem("lang", lang);
    setLanguage();
}}

window.onresize = terraform;
window.onload = terraform;
