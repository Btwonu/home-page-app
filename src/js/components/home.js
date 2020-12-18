import { html, render } from 'lit-html';

const template = (ctx) => {
  return html``;
};

class Home extends HTMLElement {
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

export default Home;

customElements.define('home-component', Home);
