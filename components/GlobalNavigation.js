/**
 * GlobalNavigation Web Component
 *
 *
 * Loads global site header - componentised for reuse
 *
 * @class GlobalNavigation
 * @extends HTMLElement
 *
 * @example
 * <global-navigation></global-navigation>
 *
 * @description
 * Renders a <nav> with the brand logo & navigation menus.
 * Renders links in a line for desktop devices, and uses a native
 * popover to render a mobile-friendly version
 */
class GlobalNavigation extends HTMLElement {
  static define(tag = "global-navigation") {
    customElements.define(tag, this);
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
          <image-loader base-resource="/public/logos/mucky-pups" width="48px" height="48px" loading="eager" alt="" fetchpriority="high"></image-loader>

          <figcaption>Mucky Pups</figcaption>
        </figure>

        <!-- Desktop & large-screen nav menu -->
        <section class="display-none md:display-flex align-items-center gap-s">
          <a href="/#about">About</a>
          <span>|</span>
          <a href="/gallery">Gallery</a>
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
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/join">Become a Member</a></li>
          </ul>
        </section>
      </nav>
    `;
  }
}

GlobalNavigation.define();
