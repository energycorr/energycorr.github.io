let activeTab = 0;
const tabs = document.querySelectorAll('.tabs li');
function setupTabs() {
    const mainHeight = terraform();
    const tabsHeight = `${mainHeight*.99}px`;
    const containerHeight = `${mainHeight*.95}px`;
    document.querySelector('.tabs').style.height = tabsHeight;
    tabs.forEach((tab, idx) =>{
        tab.querySelector('.contentContainer').style.height = containerHeight;
        const handle = tab.querySelector('.handle');
        handle.style.height = tabsHeight;
        handle.onclick = ()=>{showTab(idx)};
    });
    showTab(activeTab);
}
function showTab(tabNumber){
    if(tabs.length < 1 ){
        return;
    }
    tabs[activeTab].querySelector('.contentContainer').classList.remove('active');
    activeTab = tabNumber;
    tabs[activeTab].querySelector('.contentContainer').classList.add('active');
}
setupTabs();
window.onload = setupTabs;
window.onresize = setupTabs;
