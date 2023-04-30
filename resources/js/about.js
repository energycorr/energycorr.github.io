let activeTab = 0;
const tabs = document.querySelectorAll('.tabs li');
function terraform() {
    const header = document.querySelector('iec-header');
    const ht = window.innerHeight - header.offsetHeight;
    const tabsHeight = `${ht-ht*.1}px`;
    const containerHeight = `${ht-ht*.12}px`;
    console.log(ht)
    console.log(tabsHeight)
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

window.onload = terraform;
window.onresize = terraform;
