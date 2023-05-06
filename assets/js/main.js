let activeTab = 0;
let tabs;

function prepareAboutPage(mainHeight){
    tabs = document.querySelectorAll('.horizontal-tabs>li');
    const em = parseFloat(getComputedStyle(document.querySelector('.horizontal-tabs')).fontSize)*2;
    const tabsHeight = `${mainHeight - em }px`;
    const containerHeight = `${mainHeight - em*1.5}px`;
    document.querySelector('.horizontal-tabs').style.height = tabsHeight;
    tabs.forEach((tab, idx) =>{
        tab.querySelector('.contentContainer').style.height = containerHeight;
        const handle = tab.querySelector('.handle');
        handle.style.height = tabsHeight;
        handle.onclick = ()=>{showTab(idx)};
    });
    showTab(activeTab);
}

function prepareWorkPage(){
    tabs = document.querySelectorAll('.handle');
    console.log("click")
    tabs.forEach(tab => {
        tab.onclick = () => {
            tab.classList.toggle('active');
            const panel = tab.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `${panel.scrollHeight}px`;
            }
        };
    });
}

function terraform() {
    const url = window.location.href;
    const hdr = getComputedStyle(document.querySelector('header'));
    const mainHeight = window.innerHeight - parseFloat(hdr.height) - parseFloat(hdr.fontSize) * 2;
    document.querySelector('main').style.height = `${mainHeight}px`;
    if(url.endsWith('about')){
        prepareAboutPage(mainHeight);
    } else if(url.endsWith('work')){
        prepareWorkPage(mainHeight);
    }
}


function showTab(tabNumber){
    if(tabs === undefined || tabs.length < 1 ){
        return;
    }
    tabs[activeTab].querySelector('.contentContainer').classList.remove('active');
    activeTab = tabNumber;
    tabs[activeTab].querySelector('.contentContainer').classList.add('active');
}

window.addEventListener('load',terraform);
window.addEventListener('resize',terraform);
