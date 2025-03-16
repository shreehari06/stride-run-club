import React from "react";
import clsx from "clsx";
import { Agbalumo } from "next/font/google";

export const agbalumoFont = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin"],
  weight: "400",
});

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements; // Allows specifying the HTML tag (e.g., 'p', 'h1')
  variant?: "h1" | "h2" | "h3" | "body" | "caption" | "title" | "subtitle"; // Predefined typography variants
}

const variantClasses = {
  h1: "text-5xl font-bold leading-tight", // Larger and bold for main headings
  h2: "text-4xl font-semibold leading-snug", // Slightly smaller for subheadings
  h3: "text-3xl font-medium leading-normal", // Medium-sized headings
  body: "text-base font-normal leading-relaxed", // Standard body text
  caption: "text-sm font-light leading-snug", // Small and light for captions
  title: `text-6xl ${agbalumoFont.variable} font-style-normal font-weight-400 leading-tight`, // Ensure Agbalumo font is applied
  subtitle: "text-xl font-medium text-gray-600 leading-relaxed", // New subtitle variant
};

const Typography: React.FC<TypographyProps> = ({
  children,
  className = "",
  as: Component = "div", // Default to 'div'
  variant = "body", // Default to 'body'
}) => {
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
