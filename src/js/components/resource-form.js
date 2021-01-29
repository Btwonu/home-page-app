import { Router } from '@vaadin/router';
import { html, render } from 'lit-html';
import Model from '../services/model';

const template = ({ onEnterPress, onArrowClick, createResource }) => {
  return html`<form
    id="form-resource-add"
    @keyup="${onEnterPress}"
    @click="${onArrowClick}"
  >
    <div class="form-group">
      <span class="material-icons"> article </span>
      <label for="resource-form-title"> </label>
      <input
        type="text"
        id="resource-form-title"
        placeholder="Enter resource title"
        name="title"
      />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> insert_link </span>
      <label for="url"></label>
      <input type="url" placeholder="url" name="url" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> insert_photo </span>
      <label for="img-url"></label>
      <input type="url" placeholder="image" id="img-url" name="img" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> category </span>
      <label for="category"></label>
      <select name="category" id="category">
        <option value="">--Category--</option>
        <option value="overview">Overview</option>
        <option value="follow-along">Follow-along</option>
        <option value="immersive">Immersive</option>
      </select>
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group inactive">
      <span class="material-icons"> schema </span>
      <div class="tag-container"></div>
      <label for="resource-tags"></label>
      <input type="text" id="resource-tags" placeholder="tags" />
      <span class="material-icons arrow"> arrow_right_alt </span>
    </div>

    <div class="form-group goals inactive">
      <span class="material-icons"> fact_check </span>
      <div class="goal-container">
        <div class="resource-goal">
          <span class="material-icons"> label </span>
          <span class="goal">Add goals</span>
          <span class="material-icons tag-close-btn"> close </span>
        </div>
      </div>
      <div class="input-wrapper">
        <span class="material-icons"> task_alt </span>
        <label for="goals"></label>
        <input type="text" placeholder="goals" />
      </div>
      <span class="material-icons" @click="${createResource}"> note_add </span>
    </div>
  </form>`;
};

class ResourceForm extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.tags = [];
    this.goals = [];

    const form = document.getElementById('form-resource-add');
  }

  connectedCallback() {
    this.render();
  }

  onArrowClick(e) {
    const arrowClicked = Array.from(e.target.classList).includes('arrow');
    if (!arrowClicked) return;

    let currentInput = e.target.previousElementSibling;
    let currentFormGroup = currentInput.parentElement;
    let nextFormGroup = currentFormGroup.nextElementSibling;
    let value = currentInput.value;
    let isLastInput = nextFormGroup == null;

    // form is filled
    if (isLastInput) {
      this.createResource();
      return;
    }

    const tagContainer = currentFormGroup.querySelector('.tag-container');

    // tags are done
    if (tagContainer) {
      if (this.tags.length == 0) return;
      this.advanceFormFields(currentFormGroup, nextFormGroup, currentInput);
      return;
    }

    // current input is done
    if (value.length) {
      this.advanceFormFields(currentFormGroup, nextFormGroup, currentInput);
    }
  }

  onEnterPress(e) {
    if (e.key !== 'Enter') {
      return;
    }

    let currentInput =
      e.target.localName == 'input'
        ? e.target
        : e.target.previousElementSibling;

    let currentFormGroup = currentInput.parentElement;
    let nextFormGroup = currentFormGroup.nextElementSibling;
    let value = currentInput.value;

    let isLastInput = Array.from(currentFormGroup.classList).includes(
      'input-wrapper'
    );

    if (!value) {
      return;
    }

    // add goals
    if (isLastInput) {
      const goalContainer = currentFormGroup.previousElementSibling;

      this.goals.push(value);

      render(this.generateGoals(), goalContainer);

      currentInput.value = '';
      return;
    }

    const tagContainer = currentFormGroup.querySelector('.tag-container');

    // add tags
    if (tagContainer) {
      this.tags.push(value);

      // Render tags in DOM
      render(this.generateTags(), tagContainer);

      currentInput.value = '';
      return;
    }

    // current input is done
    if (value.length) {
      this.advanceFormFields(currentFormGroup, nextFormGroup, currentInput);
    }
  }

  advanceFormFields(current, next, input) {
    current.classList.add('inactive');
    next.classList.remove('inactive');

    const nextInput = next.querySelector('input');

    if (nextInput) {
      nextInput.focus();
    }

    if (input.value) {
      this.data[input.name] = input.value;
    }
  }

  generateTags() {
    return html`${this.tags.map(
      (tag) => html`<div class="resource-tag">
        <span>${tag}</span>
        <span class="material-icons tag-close-btn"> close </span>
      </div>`
    )}`;
  }

  generateGoals() {
    return html`${this.goals.map(
      (goal) => html`<div class="resource-goal">
        <span class="material-icons"> label </span>
        <span class="goal">${goal}</span>
        <span class="material-icons tag-close-btn"> close </span>
      </div>`
    )}`;
  }

  createResource() {
    if (this.goals.length == 0) return;
    console.log('Resource created');
    // console.log('data', this.data);
    // console.log('tags', this.tags);
    // console.log('goals', this.goals);

    let obj = {
      ...this.data,
      tags: this.tags,
      goals: this.goals,
    };

    console.log(obj);

    this.resetForm();

    // Save to DB
    Model.create(`resources/${obj.category}`, obj);
  }

  resetForm() {
    this.data = {};
    this.tags = [];
    this.goals = [];
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('resource-form', ResourceForm);

export default ResourceForm;
