// Minimal component to let us reuse the nav header
// No shadow DOM - we want global styles to apply to this
class GlobalNavigation extends HTMLElement {
  static define(tag = "global-navigation") {
    customElements.define(tag, this);
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "block";
    this.style.position = "sticky";
    this.style.top = "0";
    this.style.zIndex = "1000";

    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="display-inline-flex align-items-center gap-m justify-space-between">
        <figure class="display-inline-flex align-items-center gap-m">
          <img href="https://www.placekittens.com/48/48" class='placeholder-img' height="48px" width="48px" />

          <figcaption>Mucky Pups</figcaption>
        </figure>

        <!-- Desktop & large-screen nav menu -->
        <section class="display-none md:display-flex align-items-center gap-s">
          <a href="/#about">About</a>
          <span>|</span>
          <!-- TODO -->
          <a>Gallery</a>
          <span>|</span>
          <a href="/join">Become a Member</a>
        </section>

        <!-- Mobile navigation using native popover -->
        <button class="display-block md:display-none" popovertarget="mobile-nav-menu" aria-label="Open Navigation">
          <!-- Burger menu SVG - inlined so we can easily have hover/focus color change -->
          <!-- src: https://lucide.dev/icons/menu -->
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>

        <section popover id="mobile-nav-menu">
          <ul>
            <li><a href="/#about">About</a></li>
            <!-- TODO -->
            <li><a>Gallery</a></li>
            <li><a href="/join">Become a Member</a></li>
          </ul>
        </section>
      </nav>
    `;
  }
}

GlobalNavigation.define();
