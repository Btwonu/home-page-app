import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<figure class="quote">
    <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>
        Words can be like X-rays, if you use them properly—they’ll go through
        anything. You read and you’re pierced.
      </p>
    </blockquote>
    <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
  </figure>`;
};

class Quote extends HTMLElement {
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

customElements.define('quote-component', Quote);

export default Quote;
