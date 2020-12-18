import { html, render } from 'lit-html';

const template = ({ toggleSidebar }) => {
  return html`<nav class="nav">
    <div class="wrapper">
      <div class="sidebar-toggle" @click=${toggleSidebar}>
        <i class="material-icons hamburger-icon">menu</i>
      </div>
      <div class="nav-header">
        <a class="nav-title" href="/">Webpack</a>
      </div>
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

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  toggleSidebar() {
    if (localStorage.getItem('sidebar')) {
      localStorage.removeItem('sidebar');

      document.querySelector('.sidebar').classList.remove('active');
      return;
    }

    document.querySelector('.sidebar').classList.add('active');
    localStorage.setItem('sidebar', 'active');
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('navbar-component', Navbar);

export default Navbar;
