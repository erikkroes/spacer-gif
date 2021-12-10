const template = document.createElement('template');

template.innerHTML = `
<style>
  :host {
    display: inline-block;       
  }
</style>
`;

class SpacerGif extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));        
  }

  connectedCallback() {
    if(!this.hasAttribute('height')) {
      this.style.height = "1px";
    }
    else {
      this.style.height = this._height;
    }

    if(!this.hasAttribute('width')) {
      this.style.width = "1px";
    }
    else {
      this.style.width = this._width;
    }

    if(this.hasAttribute('bgcolor')) {
      this.style.backgroundColor = this._bgcolor;
    }
  }

  static get observedAttributes() {
    return ['height', 'width', 'bgcolor'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case 'height':
        this._height = newValue + "px";
        break;
      case 'width':
        this._width = newValue + "px";
        break;
      case 'bgcolor':
        this._bgcolor = newValue;
        break;
    }
  }
}

window.customElements.define('center-div', SpacerGif);