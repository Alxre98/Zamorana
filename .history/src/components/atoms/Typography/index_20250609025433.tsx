import React from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base leading-relaxed",
  span: "inline",
  div: "block",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  className = "",
  ...props
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;
  const combinedClassName = `${variantClasses[variant]} ${className}`.trim();

  return React.createElement(
    Component,
    { className: combinedClassName, ...props },
    children
  );
};
