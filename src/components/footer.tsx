"use client";

import React from "react";
import Container from "./ui/container";
import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import Logo from "./logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

type TFooter = {};

const Footer: React.FC<TFooter> = ({}) => {
  const router = useRouter();
  return (
    <footer className="bg-muted max-md:px-4">
      <Container className="flex py-10 justify-between items-start">
        <div className="flex flex-col items-start gap-4 text-muted-foreground">
          <Logo logoWidth={70} logoHeight={27} />
          <div>
            <p className="text-md font-semibold pb-1">© DevelopmentGangster</p>
            <ul className="flex flex-col gap-1">
              <Link
                href={"https://github.com/gyojinnK"}
                className="text-xs font-medium"
              >
                FE | https://github.com/gyojinnK
              </Link>
              <Link
                href={"https://github.com/Brazen-Story"}
                className="text-xs font-medium"
              >
                BE | https://github.com/Brazen-Story
              </Link>
            </ul>
          </div>
          <p className="text-sm font-normal">
            본 애플리케이션 Biding은 실제 서비스되지 않습니다.
          </p>
          <div className="flex gap-4 items-center">
            <GitHubLogoIcon className="w-8 h-8" />
            <NotionLogoIcon className="w-8 h-8" />
          </div>
        </div>

        <br />
        <div>
          <p></p>
          <p></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
