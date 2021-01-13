import { html, render } from 'lit-html';

const template = ({ closeOverlay }) => {
  return html`<div class="overlay" @click="${closeOverlay}">
    <div class="btn-close" @click="${closeOverlay}">
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>`;
};

class Overlay extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  closeOverlay() {
    this.querySelector('.overlay').classList.remove('show');
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('overlay-component', Overlay);

export default Overlay;
