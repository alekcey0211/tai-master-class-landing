import { RefObject } from "preact";
import { useState } from "preact/hooks";
import { useEventListener } from "./use-event-listener.ts";

export const useHover = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
) => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);

  return value;
};
