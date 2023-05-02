const headImageRatio = 0.11;
const menuLineHeightPx = 25;
const menuMinWidthPx = 921;
const padding = 95;

function terraform(){
    const menuLines = Math.floor(menuMinWidthPx/window.innerWidth);
    let headerHeight = window.innerWidth*headImageRatio + menuLineHeightPx*menuLines + padding;
    const mainHeight = window.innerHeight - headerHeight;
    document.querySelector('main').style.height = `${mainHeight}px`;
    return mainHeight;
}

window.onload = terraform;
window.onresize = terraform;
