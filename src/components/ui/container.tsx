import { cn } from "@/lib/utils";
import React from "react";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<TContainer> = ({ children, className }) => {
  return (
    <div className="flex justify-center">
      <div className={cn("max-w-6xl w-full", className)}>{children}</div>
    </div>
  );
};

export default Container;
