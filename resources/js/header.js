// noinspection JSUnusedGlobalSymbols
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('/pages/header.html')
            .then(response => response.text())
            .then(data => {this.innerHTML = data;})
            .catch(error => console.error(error));
    }
}

customElements.define('iec-header', Header);
