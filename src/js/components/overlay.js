import { html, render } from 'lit-html';
import ResourceForm from './resource-form';

const template = ({ closeOverlay }) => {
  return html`<div class="overlay" @click="${closeOverlay}">
    <div class="btn-close"">
      <span class="top"></span>
      <span class="bottom"></span>
    </div>

    <resource-form></resource-form>
  </div>`;
};

class Overlay extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('storage', () => {
      console.log('storage');
    });
  }

  connectedCallback() {
    this.render();
  }

  closeOverlay(e) {
    if (
      e.target.className == 'btn-close' ||
      e.target.className == 'overlay active' ||
      e.target.className == 'top' ||
      e.target.className == 'bottom'
    ) {
      this.querySelector('.overlay').classList.remove('active');
    }
  }

  // checkState() {
  //   if (localStorage.getItem('overlay')) {
  //     this.querySelector('.overlay').classList.add('active');
  //     this.render();
  //   } else {
  //     this.querySelector('.overlay').classList.remove('active');
  //   }
  // }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('overlay-component', Overlay);

export default Overlay;
