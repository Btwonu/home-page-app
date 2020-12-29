import { html, render } from 'lit-html';
import SliderCard from './slider-card';

const template = (ctx) => {
  return html`<div class="slider">
    <slider-card
      url="https://www.google.com/"
      img="https://cdn.svgporn.com/logos/google-icon.svg"
    ></slider-card>
    <slider-card
      url="https://github.com/"
      img="https://cdn.svgporn.com/logos/github-icon.svg"
    ></slider-card>
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

    // Instantiate glider
    new Glider(document.querySelector('.slider'), {
      slidesToShow: 'auto', //'auto',
      slidesToScroll: 'auto',
      itemWidth: 300,
      rewind: true,
      draggable: true,
      scrollLock: false,
      dragVelocity: 0.8,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToScroll: 'auto',
            itemWidth: 300,
            slidesToShow: 'auto',
            // exactWidth: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToScroll: 'auto',
            slidesToShow: 'auto',
            draggable: true,
            dragVelocity: 0.8,
            itemWidth: 300,
            rewind: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
            draggable: true,
            dragVelocity: 0.8,
            itemWidth: 300,
            rewind: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToScroll: 'auto',
            slidesToShow: 'auto',
            dragVelocity: 1.2,
            draggable: true,
            itemWidth: 300,
            rewind: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            dragVelocity: 1.8,
            draggable: true,
            itemWidth: 300,
            rewind: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 100,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            dragVelocity: 1.8,
            draggable: true,
            itemWidth: 300,
            rewind: true,
            dots: false,
            arrows: false,
          },
        },
      ],
    });
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('slider-component', Slider);

export default Slider;
