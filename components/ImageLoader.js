// Accepts a string attr "baseResource" - this is the relative location of the image in the codebase
// If given baseResource=public/dec-2025/disco
// Will load the resources:
// - public/dec-2025/disco.webp (for desktop)
// - public/dec-2025/disco-m.webp (for mobile)
// - public/placeholder.webp (as a fallback img)
class ImageLoader extends HTMLElement {
  static define(tag = "image-loader") {
    customElements.define(tag, this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const baseResource =
        this.getAttribute("base-resource") ?? "/public/placeholder",
      alt = this.getAttribute("alt") ?? "Placeholder image",
      width = this.getAttribute("width") ?? "100%";

    this.innerHTML = `
      <picture>
        <!-- Mobile Image -->
        <source media="(max-width: 600px)" srcset="${baseResource}-m.webp">
        <!-- Desktop Image -->
        <source media="(min-width: 601px)" srcset="${baseResource}.webp">
        <!-- Fallback Image -->
        <img aria-hidden="true" loading="lazy" decoding="async"
          src="/public/placeholder.webp"
          alt="${alt}" width="${width}">
      </picture>
    `;
  }
}

ImageLoader.define();
