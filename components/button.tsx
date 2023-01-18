import { JSX } from "preact";

export function Button({
  className,
  text,
  icon,
  href,
  target,
  data = {},
}: {
  className?: string;
  text: string;
  icon?: JSX.Element;
  href?: string;
  target?: string;
  data?: Record<string, string>;
}) {
  const hasIcon = Boolean(icon);

  const Tag = href ? "a" : "button";

  return (
    <Tag
      class={`bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] active:bg-opacity-[0.25] text-black text-opacity-50 text-2xl py-3 ${
        hasIcon ? "pr-4 pl-6 hover>svg:text-red" : "px-4"
      } inline-flex items-center gap-x-2`}
      className={className}
      href={href}
      target={target}
      {...data}
    >
      <span>{text}</span>
      {icon}
    </Tag>
  );
}
