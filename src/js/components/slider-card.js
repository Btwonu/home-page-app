import { html, render } from 'lit-html';
import '../../lib/glider/glider.min';
import '../../lib/glider/glider.min.css';

const template = (ctx) => {
  return html`<div class="slider-card">
    <a href="/" target="_blank">
      <div class="slider-card__image"></div>
    </a>
  </div>`;
};

class SliderCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();

    const linkEl = this.querySelector('a');
    const imgEl = this.querySelector('.slider-card__image');

    linkEl.href = this.getAttribute('url');
    imgEl.style.background = `url('${this.getAttribute(
      'img'
    )}') center / contain no-repeat`;
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('slider-card', SliderCard);

export default SliderCard;
