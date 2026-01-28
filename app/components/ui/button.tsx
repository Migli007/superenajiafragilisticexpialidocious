import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400";

  const variants = {
    default: "bg-teal-500 text-black hover:bg-teal-600",
    outline: "border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
