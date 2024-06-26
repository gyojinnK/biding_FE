import React from "react";
import Logo from "./logo";
import Container from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

type THeader = {};

const Header: React.FC<THeader> = ({}) => {
  return (
    <header className="py-4 sticky top-0 bg-background z-50 shadow-sm">
      <Container>
        <div className="w-full flex justify-between items-center">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="flex gap-4 items-center">
            <Link href={"/colors"}>
              <Button variant={"link"}>Colors</Button>
            </Link>
            <Link href={"/seo"}>
              <Button variant={"link"}>SEO</Button>
            </Link>
            <Link href={"/favicon"}>
              <Button variant={"link"}>Favicon</Button>
            </Link>
            <Link href={"/utilities"}>
              <Button variant={"link"}>Utilities</Button>
            </Link>
            <Link href={"/examples"}>
              <Button variant={"link"}>Examples</Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
