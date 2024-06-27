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
            <Link href={"/service"}>
              <Button variant={"link"}>서비스 소개</Button>
            </Link>
            <Link href={"/goods"}>
              <Button variant={"link"}>상품목록</Button>
            </Link>
            <Link href={"/auctions"}>
              <Button variant={"link"}>경매목록</Button>
            </Link>
            <Link href={"/login"}>
              <Button variant={"link"}>로그인/회원가입</Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
