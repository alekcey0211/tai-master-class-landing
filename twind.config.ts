import { Configuration } from "twind";

export default {
  plugins: {
    gallery: {},
    "pswp-gallery": {},
    "gallery-open": {},
    swiper: {},
    "swiper-wrapper": {},
    "swiper-slide": {},
    "swiper-pagination": {},
    "swiper-button-next": {},
    "swiper-button-prev": {},
    "visually-hidden": {
      border: "0",
      clip: "rect(0 0 0 0)",
      "clip-path": "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      "white-space": "nowrap",
      "&.focusable:active": {
        clip: "auto",
        "clip-path": "none",
        height: "auto",
        margin: "0",
        overflow: "visible",
        position: "static",
        width: "auto",
        "white-space": "inherit",
      },
      "&.focusable:focus": {
        clip: "auto",
        "clip-path": "none",
        height: "auto",
        margin: "0",
        overflow: "visible",
        position: "static",
        width: "auto",
        "white-space": "inherit",
      },
    },
    "list-lightning": {
      "list-style-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='16' viewBox='0 0 22 24' fill='none'%3E%3Cpath fill='%23005CC3' d='M12.6 3c0-.2-.1-.4-.3-.5l-.5.1-1.6 1.7a35.4 35.4 0 0 0-6.1 9c0 .3.2.5.5.5h3.9V21c0 .2.1.4.3.5l.5-.1.7-.8c2.5-2.5 4.7-5.5 6.4-8.7l.4-1v-.4c0-.2-.2-.3-.4-.3h-3.8V3Z'/%3E%3C/svg%3E");`,
    },
    "aspect-auto": {
      "aspect-ratio": `auto`,
    },
    "aspect-square": {
      "aspect-ratio": `1 / 1`,
    },
    "aspect-video": {
      "aspect-ratio": `16 / 9`,
    },
    scroll: (parts) => ({
      "scroll-behavior": parts[0],
    }),
    "w-fit": {
      width: "fit-content",
    },
    isolate: {
      isolation: "isolate",
    },
    "grid-rows": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-rows": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-rows": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
    "grid-cols": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-columns": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-columns": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
    aspect: (parts) =>
      parts[0]?.startsWith("[") && {
        "aspect-ratio": parts[0]
          .substring(1, parts[0].length - 1)
          .split("/")
          .join(" / "),
      },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans', sans-serif",
        "noto-sans": '"Noto Sans"',
      },
      colors: {
        red: "#B62E1F",
        fiolet: "#DCD9FF",
        blue: "#005CC3",
        "blue-2": "#44566F",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-5": "#E0E0E0",
        "gray-6": "#F2F2F2",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    container: (theme) => {
      return {
        center: true,
        padding: "0",
        // padding: {
        //   ...theme("padding"),
        //   sm: "2rem",
        //   lg: "40px",
        //   xl: "40px",
        //   "2xl": "40px",
        // },
      };
    },
  },
  preflight: (cssRule, { css, theme }) => {
    cssRule["@import"] = [
      "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&display=swap')",
    ];

    cssRule["*:focus"] = {
      "outline-color": theme("colors", "red") + "!important",
    };
    cssRule[":root"] = css("scroll-smooth");
    cssRule[".swiper-slide-active > div"] = css("bg-fiolet");
    // cssRule["body"] = css("bg-gray-6 text-gray-2");
  },
} as Configuration;
