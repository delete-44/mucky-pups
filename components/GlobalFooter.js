// Minimal component to let us reuse the footer
// No shadow DOM - we want global styles to apply to this
class GlobalFooter extends HTMLElement {
  static define(tag = "global-footer") {
    customElements.define(tag, this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="footer-content display-flex gap-m">
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/#dress-code">Dress Code</a></li>
            <li><a href="/#code-of-conduct">Code of Conduct</a></li>
          </ul>
          <ul>
            <!-- TODO -->
            <li><a>Gallery</a></li>
            <li><a href="/join">Become a Member</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

GlobalFooter.define();
