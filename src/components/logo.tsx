"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type TLogo = {
  logoWidth?: number;
  logoHeight?: number;
  className?: string;
};

const Logo: React.FC<TLogo> = ({ logoWidth, logoHeight, className }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme !== "dark") {
    return (
      <Image
        src={"/images/biding-light-logo.png"}
        alt="logo"
        width={logoWidth || 100}
        height={logoHeight || 38}
        className={cn("object-cover", className)}
      />
    );
  } else {
    return (
      <Image
        src={"/images/biding-dark-logo.png"}
        alt="logo"
        width={logoWidth || 100}
        height={logoHeight || 38}
        className={cn("object-cover", className)}
      />
    );
  }
};

export default Logo;
