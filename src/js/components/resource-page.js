import { html, render } from 'lit-html';
import request from '../services/request';
import ResourceCard from './resource-card';
import Overlay from './overlay';

const template = ({ state, openOverlay }) => {
  return html`<div class="layout-wrapper">
    <overlay-component></overlay-component>
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <section class="resource-section">
      <header class="resources-header">
        <div class="resource-add-btn empty"></div>
        <h2 class="resources-global-title">Resources</h2>
        <div class="resource-add-btn" @click="${openOverlay}">
          <p>Add Resource</p>
          <span class="material-icons"> note_add </span>
        </div>
      </header>
      <main class="resource-card-container">
        ${state.map(
          (res) =>
            html`<resource-card
              data-link="${res.url}"
              data-img="${res.img}"
              data-title="${res.title}"
              data-goals="${res.goals.join(' | ')}"
              data-tags="${res.tags.join(' | ')}"
              >${res}</resource-card
            >`
        )}
      </main>
    </section>
  </div>`;
};

class Resources extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    this.state = await this.getResources();
    this.render();
  }

  async getResources() {
    let category = this.location.params.id;
    let response = await request.get(
      `https://home-page-ef6d4-default-rtdb.europe-west1.firebasedatabase.app/resources/${category}.json`
    );
    const resourceArr = [];

    Object.keys(response).forEach((key) => {
      let resource = response[key];
      resourceArr.push(resource);
    });

    return resourceArr;
  }

  openOverlay() {
    document.querySelector('.overlay').classList.add('active');
    // localStorage.setItem('overlay', 'active');
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('resource-page', Resources);

export default Resources;
