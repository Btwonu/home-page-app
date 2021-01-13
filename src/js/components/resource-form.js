import { html, render } from 'lit-html';

const template = ({ combined }) => {
  return html`<form
    id="form-resource-add"
    @keyup="${combined}"
    @click="${combined}"
  >
    <div class="form-group">
      <span class="material-icons"> article </span>
      <label for="resource-form-title"> </label>
      <input
        type="text"
        id="resource-form-title"
        placeholder="Enter resource title"
      />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> insert_link </span>
      <label for="url"></label>
      <input type="url" placeholder="url" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> insert_photo </span>
      <label for="img-url"></label>
      <input type="url" placeholder="image" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> category </span>
      <label for="category"></label>
      <select name="" id="category">
        <option value="">--Category--</option>
        <option value="overview">Overview</option>
        <option value="follow-along">Follow-along</option>
        <option value="immersive">Immersive</option>
      </select>
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> schema </span>
      <label for="tags"></label>
      <input type="text" placeholder="tags" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> task_alt </span>
      <label for="goals"></label>
      <input type="text" placeholder="goals" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>
  </form>`;
};

class ResourceForm extends HTMLElement {
  constructor() {
    super();
    this.data = [];
  }

  connectedCallback() {
    this.render();
  }

  combined(e) {
    const arrowClicked = Array.from(e.target.classList).includes('arrow');

    if (e.key !== 'Enter' && !arrowClicked) {
      return;
    }

    let currentInput =
      e.target.localName == 'input'
        ? e.target
        : e.target.previousElementSibling;

    let currentFormGroup = currentInput.parentElement;
    let nextFormGroup = currentFormGroup.nextElementSibling;
    let value = currentInput.value;
    this.data.push(value);

    let allIsOk = true; // validation
    if (allIsOk) {
      currentFormGroup.classList.add('inactive');
      nextFormGroup.classList.remove('inactive');
      // console.dir(nextFormGroup);

      // if next field has an input -> focus it
      if (nextFormGroup.children[2].localName == 'input') {
        nextFormGroup.children[2].focus();
      }
    }

    console.log('currentFormGroup:', currentFormGroup);
    console.log('currentInput:', currentInput);
    console.log('nextFormGroup:', nextFormGroup);
    console.log('Value:', value);
    console.log(this.data);
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('resource-form', ResourceForm);

export default ResourceForm;
