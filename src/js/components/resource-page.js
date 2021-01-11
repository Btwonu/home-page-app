import { html, render } from 'lit-html';

const template = (ctx) => {
  return html``;
};

class Resources extends HTMLElement {
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

customElements.define('resource-page', Resources);

export default Resources;
