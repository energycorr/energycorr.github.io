function terraform(){
    const mainHeight = window.innerHeight - document.querySelector('iec-header').offsetHeight - 60;
    document.querySelector('main').style.height = `${mainHeight}px`;
    return mainHeight;
}

window.onload = terraform;
window.onresize = terraform;
