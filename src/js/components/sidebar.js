import { html, render } from 'lit-html';

const template = (ctx) => {
  return html`<nav class="sidebar">
    <div class="heading">Logoped</div>
    <div class="profile-view">
      <div class="profile-icon"></div>
      <p class="profile-name">Val Delchev</p>
    </div>

    <ul class="sidebar-menu">
      <li class="dropdown">
        <div class="dropdown-heading nav-link">
          <i class="material-icons heading-icon">home</i>
          <a href="/"">Home</a>
        </div>
      </li>
      <li class="dropdown">
        <div class="dropdown-heading">
          <i class="material-icons heading-icon">assignment</i>
          <a href="#"">Tasks</a>
          <i class="material-icons arrow-icon">keyboard_arrow_right</i>
        </div>
        <ul class="dropdown-content">
          <li><a href="/notes/todays">Todays</a></li>
          <li><a href="/notes/important">Important</a></li>
          <li><a href="/notes/programming">Programming</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <div class="dropdown-heading">
          <i class="material-icons heading-icon">folder</i>
          <a href="#"">Resources</a>
          <i class="material-icons arrow-icon">keyboard_arrow_right</i>
        </div>
        <ul class="dropdown-content">
          <li><a href="#">Overview</a></li>
          <li><a href="#">Follow along</a></li>
          <li><a href="#">Immersive</a></li>
        </ul>
      </li>
    </ul>
    <div class="logout">
      <i class="material-icons logout-icon">exit_to_app</i>
      <a href="/logout">Logout</a>
    </div>
    
  </nav>`;
};

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.checkState();

    this.querySelector('.sidebar-menu').addEventListener(
      'click',
      this.handleSidebarMenu
    );

    this.querySelector('.logout').addEventListener(
      'mouseenter',
      this.animateLogoutIconDown
    );
    this.querySelector('.logout').addEventListener(
      'mouseleave',
      this.animateLogoutIconDefault
    );
  }

  animateLogoutIconDown(e) {
    e.target.classList.add('down');
  }

  animateLogoutIconDefault(e) {
    e.target.classList.remove('down');
  }

  handleSidebarMenu(e) {
    // We are looking for the dropdown-heading element regardless of which child is clicked
    let dropdownHeadingDiv = e.target;

    if (!e.target.matches('.dropdown-heading')) {
      dropdownHeadingDiv = e.target.parentElement;
    }

    // If the dropdown heading element is a nav link
    if (dropdownHeadingDiv.matches('.nav-link')) {
      // Go to the nav link url
      dropdownHeadingDiv.querySelector('a').click();
      return;
    }

    // Show dropdown menu items
    const dropdownContentUl = dropdownHeadingDiv.nextElementSibling;
    const arrowIcon = dropdownHeadingDiv.querySelector('.arrow-icon');

    arrowIcon.classList.toggle('active');

    dropdownContentUl.classList.toggle('active');
  }

  checkState() {
    if (localStorage.getItem('sidebar')) {
      this.querySelector('.sidebar').classList.add('active');
    } else {
      this.querySelector('.sidebar').classList.remove('active');
    }
  }

  toggleSidebar() {
    this.classList.toggle('active');
  }

  render() {
    render(template(this), this, { eventContext: this });
    // render lit-html template, pass component as context, render component, use component as context for events
  }
}

customElements.define('sidebar-component', Sidebar);

export default Sidebar;
