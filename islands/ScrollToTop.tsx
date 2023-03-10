import { useState, useEffect } from "preact/hooks";
import { icons } from "../components/icons.tsx";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div class={`fixed z-50 bottom-8 right-8 ${!isVisible && "hidden"}`}>
      <button
        type="button"
        onClick={scrollToTop}
        class="w-16 h-16 grid place-content-center bg-blue bg-opacity-80 hover:bg-opacity-90 active:bg-opacity-95 rounded-full p-3 text-white shadow-sm"
        {...{
          "aria-label": "scroll to top",
        }}
      >
        <icons.ArrowUp aria-hidden="true" class="w-8 h-8" />
      </button>
    </div>
  );
}
