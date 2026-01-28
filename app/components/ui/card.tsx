import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl border border-emerald-200 shadow-sm",
        "transition-transform hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx("p-6 text-emerald-900", className)}>
      {children}
    </div>
  );
};
