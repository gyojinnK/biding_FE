"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type TLogo = {
  logoWidth?: number;
  logoHeight?: number;
};

const Logo: React.FC<TLogo> = ({ logoWidth, logoHeight }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme !== "dark") {
    return (
      <Image
        src={"/images/biding-light-logo.png"}
        alt="logo"
        width={logoWidth || 100}
        height={logoHeight || 38}
        className="object-cover"
      />
    );
  } else {
    return (
      <Image
        src={"/images/biding-dark-logo.png"}
        alt="logo"
        width={logoWidth || 100}
        height={logoHeight || 38}
        className="object-cover"
      />
    );
  }
};

export default Logo;
