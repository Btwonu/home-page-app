import { html, render } from 'lit-html';

const template = (ctx) => {
  return html``;
};

class NotFound extends HTMLElement {
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

customElements.define('not-found', NotFound);

export default NotFound;
