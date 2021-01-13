import { html, render } from 'lit-html';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Slider from './slider';
import Timer from './timer';
import Quote from './quote';

const template = (ctx) => {
  return html` <div class="layout-wrapper">
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <timer-component></timer-component>
    <slider-component></slider-component>
    <quote-component></quote-component>
  </div>`;
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
