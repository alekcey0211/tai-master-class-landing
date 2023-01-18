import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.min.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery-open",
  secondaryZoomLevel: 1,
  showHideAnimationType: 'fade',
  pswpModule: () => import("./photoswipe/photoswipe.esm.min.js"),
});
lightbox.init();

window.galleryOpen = (id) => {
  document.querySelector(`#${id} a`)?.click();
};
const lightbox2 = new PhotoSwipeLightbox({
  gallery: "[id^=gallery]",
  children: "a",
  secondaryZoomLevel: 1,
  showHideAnimationType: 'fade',
  pswpModule: () => import("./photoswipe/photoswipe.esm.min.js"),
});
lightbox2.init();
