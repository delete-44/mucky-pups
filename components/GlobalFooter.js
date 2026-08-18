/**
 * GlobalFooter Web Component
 *
 *
 * Loads global site footer - componentised for reuse
 *
 * @class GlobalFooter
 * @extends HTMLElement
 *
 * @example
 * <global-footer></global-footer>
 *
 * @description
 * Renders a <footer> with sitemap navigation
 */
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
        <div class="footer-content">
          <section class="display-flex gap-m">
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#dress-code">Dress Code</a></li>
              <li><a href="/#sexual-health-is-cool">Sexual Health Is Cool</a></li>
            </ul>
            <ul>
              <li><a href="/conduct">Code of Conduct</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/join">Become a Member</a></li>
            </ul>
          </section>

          <small>website made by delete &lt;3</small>
        </div>
      </footer>
    `;
  }
}

GlobalFooter.define();
