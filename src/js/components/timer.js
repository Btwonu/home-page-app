import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<div class="timer">
    <p>
      <span class="hours">00</span>
      :
      <span class="mins">00</span>
    </p>
    <div class="assigned-task">
      <h2>Code</h2>
    </div>
  </div>`;
};

class Timer extends HTMLElement {
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

customElements.define('timer-component', Timer);

export default Timer;
