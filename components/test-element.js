/**
 * This is a test web component
 */
class TestElement extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('name', 'ashton'); //setting an attribute

        const shadowRoot = this.attachShadow({ mode: 'open' }); //attaches a shadow DOM tree to <test-element> and returns a reference

    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<div class="wrapper"><p>Hello ${this.getAttribute("name")}!</p><p>Nice to meet you</p></div>`;
    }
}

// Register the custom element
customElements.define('test-element', TestElement);
