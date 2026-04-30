import { FC, ReactNode } from "react";

export const HeroHighlight: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

export const Highlight: FC<{ children: ReactNode }> = ({ children }) => {
  // Updated highlight color to lavender palette (#c8a2f8)
  return <span className="text-[#2c3947] font-bold">{children}</span>;
};
