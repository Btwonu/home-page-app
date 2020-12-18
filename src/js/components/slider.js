import { html, render } from 'lit-html';
import SliderCard from './slider-card';

const template = (ctx) => {
  return html`<div class="slider">
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
    <slider-card></slider-card>
  </div>`;
};

class Slider extends HTMLElement {
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

customElements.define('slider-component', Slider);

export default Slider;
