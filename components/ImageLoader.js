/**
 * ImageLoader Web Component
 *
 *
 * Loads responsive images with mobile and desktop variants.
 *
 * @class ImageLoader
 * @extends HTMLElement
 *
 * @example
 * // Basic usage
 * <image-loader base-resource="/public/hero"></image-loader>
 *
 * @attribute {string} base-resource - The relative path to the image without extension.
 *   The component will load `{base-resource}.webp` for desktop and `{base-resource}-m.webp`
 *   for mobile. Defaults to `/public/placeholder`.
 *
 * @attribute {string} [alt="Placeholder image"] - Alt text for the image.
 *
 * @attribute {string} [width="100%"] - CSS width value for the image.
 *
 * @attribute {string} [height="auto"] - CSS height value for the image.
 *
 * @attribute {string} [loading="lazy"] - Loading strategy for the image. Accepts "lazy"
 *   or "eager". Use "eager" for above-the-fold images like heroes.
 *
 * @attribute {string} [fetchpriority="auto"] - Configure fetch prioirty - complements preloading
 *
 *
 * @description
 * Renders a `<picture>` element with:
 * - Mobile variant (max-width: 750px): `{base-resource}-m.webp`
 * - Desktop variant (min-width: 601px): `{base-resource}.webp`
 * - Fallback: `/public/placeholder.webp`
 */
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
      width = this.getAttribute("width") ?? "100%",
      height = this.getAttribute("height") ?? "auto",
      loading = this.getAttribute("loading") ?? "lazy",
      fetchpriority = this.getAttribute("fetchpriority") ?? "auto";

    this.innerHTML = `
      <picture>
        <!-- Mobile Image -->
        <source media="(max-width: 750px)" srcset="${baseResource}-m.webp">
        <!-- Desktop Image -->
        <source media="(min-width: 601px)" srcset="${baseResource}.webp">
        <!-- Fallback Image -->
        <img aria-hidden="true" loading="${loading}" decoding="async"
          src="/public/placeholder.webp"
          alt="${alt}" width="${width}" height="${height}" fetchpriority="${fetchpriority}">
      </picture>
    `;
  }
}

ImageLoader.define();
