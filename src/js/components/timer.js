import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<div class="timer">
    <p>
      <span class="hours">00</span>
      :
      <span class="mins">00</span>
      :
      <span class="secs">00</span>
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

    const para = this.querySelector('.timer > p');

    para.addEventListener('wheel', updateValue);
    // .addEventListener('wheel', (e) => updateValue);

    let seconds = this.querySelector('.secs');
    let minutes = this.querySelector('.mins');
    let hours = this.querySelector('.hours');

    // minutes.addEventListener('wheel', updateValue);

    function updateValue(e) {
      if (e.target === e.currentTarget) return;

      e.preventDefault(); // prevents body from scrolling
      let current = Number(e.target.textContent);

      if (e.deltaY < 0) current++;
      if (e.deltaY > 0) current--;
      if (current < 0) current = 0;

      let result = current < 10 ? `0${current}` : current;

      console.log(result);
      e.target.textContent = result;
    }

    // when scrolling add/remove 1 UNIT
    // UNIT depends on which element is scrolled on
    // add the value to the total timer count
    // timer logic continues
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('timer-component', Timer);

export default Timer;
