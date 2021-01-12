import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`
    <div class="resource-card">
      <header>
        <h2 class="resource-title">${ctx.dataset.title}</h2>
        <div class="resource-card-image"></div>
      </header>
      <main>
        <ul class="resource-goals">
          ${ctx.dataset.goals
            .split(' | ')
            .map(
              (goal) =>
                html`<li>
                  <span class="material-icons"> task_alt </span> ${goal}
                </li>`
            )}
        </ul>
      </main>
      <footer>
        <ul class="resource-tags">
          ${ctx.dataset.tags
            .split(' | ')
            .map((tag) => html`<li><p class="tag">${tag}</p></li>`)}
        </ul>
        <a class="resource-btn" href="${ctx.dataset.link}" target="_blank"
          >Go</a
        >
      </footer>
    </div>
  `;
};

class ResourceCard extends HTMLElement {
  constructor() {
    super();
    // console.log(this.dataset.link);
    // console.log(this.dataset.img);
    // console.log(this.dataset.title);
    // console.log(this.dataset.goals.split(' | '));
    // console.log(this.dataset.tags.split(' | '));
  }

  connectedCallback() {
    this.render();
    this.querySelector(
      '.resource-card-image'
    ).style.background = `url(${this.dataset.img})
    center/cover no-repeat`;
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('resource-card', ResourceCard);

export default ResourceCard;
