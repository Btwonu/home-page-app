import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<div class="slider-card">
    <div class="slider-card__image"></div>
  </div>`;
};

class SliderCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('slider-card', SliderCard);

export default SliderCard;
