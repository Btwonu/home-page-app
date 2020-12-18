import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<nav class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <a class="nav-title" href="/">Webpack</a>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <a href="/register">Register</a>
      <a href="/login">Login</a>
      <a href="/logout">Logout</a>
      <a href="/users">Users</a>
      <a href="http://github.io/btwonu" target="_blank">Github</a>
    </div>
  </nav>`;
};

class Boilerplate extends HTMLElement {
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

customElements.define('boilerplate-component', Boilerplate);

export default Boilerplate;

customElements.define('navbar-component', Navbar);
