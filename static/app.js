import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.min.js";
import Swiper from "./swiper/swiper-bundle.esm.browser.min.js";

const screens = {
  /** 375px */
  "2xs": 375,
  /** 475px */
  xs: 475,
  /** 640px */
  sm: 640,
  /** 768px */
  md: 768,
  /** 1024px */
  lg: 1024,
  /** 1280px */
  xl: 1280,
  /** 1440px */
  "2xl": 1440,
};

const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery-open",
  secondaryZoomLevel: 1,
  showHideAnimationType: "fade",
  pswpModule: () => import("./photoswipe/photoswipe.esm.min.js"),
});
lightbox.init();

const lightbox2 = new PhotoSwipeLightbox({
  gallery: "[id^=gallery]",
  children: "a",
  secondaryZoomLevel: 1,
  showHideAnimationType: "fade",
  pswpModule: () => import("./photoswipe/photoswipe.esm.min.js"),
});
lightbox2.init();

const galleryOpen = (id, index = 0) => {
  console.log(`#${id} a${index ? `:nth-child(${index})` : ""}`)
  document
    .querySelector(`#${id} a${index ? `:nth-child(${index})` : ""}`)
    ?.click();
};
window.galleryOpen = galleryOpen;

const swiper = new Swiper("#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3", {
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    [screens.lg]: {
      slidesPerView: 3,
    },
    [screens.xl]: {
      slidesPerView: 4,
    },
  },
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: "#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-next",
    prevEl: "#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-prev",
  },
});
swiper.on("click", (swiper) => {
  /** @type HTMLDivElement */
  const slide = swiper.clickedSlide;
  galleryOpen(
    "gallery-71e5983e0ce24d2aa0a941ba82f4c3f3",
    Number(slide.dataset.index)
  );
});
