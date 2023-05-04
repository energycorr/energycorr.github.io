const tabs = document.querySelectorAll('.handle');

function setupTabs() {
    terraform();
    tabs.forEach((tab, idx) => {
        tab.onclick = () => {
           tab.classList.toggle('active');
           const panel = tab.nextElementSibling;
           if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
           } else {
               console.log(panel.scrollHeight)
               panel.style.maxHeight = `${panel.scrollHeight}px`;
           }
        };
    });
    //showTab(activeTab);
}


window.onload = setupTabs;
window.onresize = setupTabs;
