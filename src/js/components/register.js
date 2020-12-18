import { html, render } from 'lit-html';
import Sidebar from './sidebar';

const template = (ctx) => {
  return html` <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>`;
};

class Register extends HTMLElement {
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

customElements.define('register-component', Register);

export default Register;
