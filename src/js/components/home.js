import { html, render } from 'lit-html';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Slider from './slider';

const template = (ctx) => {
  return html` <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <slider-component></slider-component>`;
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

customElements.define('home-component', Home);

export default Home;
