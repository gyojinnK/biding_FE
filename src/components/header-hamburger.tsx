"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import {
  Bars3Icon,
  CircleStackIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ThemeSwitcher from "./theme-switcher";
import { useSession } from "next-auth/react";
import { Separator } from "./ui/separator";
import { EnterIcon, LayersIcon } from "@radix-ui/react-icons";

const HeaderHamburger = () => {
  const session = useSession();

  return (
    <div className="relative md:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Bars3Icon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="w-2/3">
          <SheetHeader className="text-left pb-8">
            <SheetTitle className="text-2xl text-primary">메뉴</SheetTitle>
            <SheetDescription>
              <p className="mt-1">경매를 등록하거나 참여해보세요.</p>
            </SheetDescription>
          </SheetHeader>
          {/* <Separator className="w-full my-4 bg-primary" /> */}
          <div className="flex flex-col gap-6">
            <SheetClose
              asChild
              className="flex justify-start items-center gap-2 text-lg"
            >
              <Link href={"/goods"}>
                <LayersIcon className="w-4 h-4" />
                상품목록
              </Link>
            </SheetClose>
            <SheetClose
              asChild
              className="flex justify-start items-center gap-2 text-lg"
            >
              <Link href={"/auctions"}>
                <CircleStackIcon className="w-4 h-4" />
                경매목록
              </Link>
            </SheetClose>
            <SheetClose
              asChild
              className="flex justify-start items-center gap-2 text-lg"
            >
              <Link href={"/service"}>
                <SparklesIcon className="w-4 h-4" />
                서비스 소개
              </Link>
            </SheetClose>
            <SheetClose
              asChild
              className="flex justify-start items-center gap-2 text-lg"
            >
              {session.data ? (
                <Link href={"/me"}>
                  <UserIcon className="w-4 h-4" /> 마이페이지
                </Link>
              ) : (
                <Link href={"/login"}>
                  <EnterIcon className="w-4 h-4" />
                  로그인/회원가입
                </Link>
              )}
            </SheetClose>
          </div>
          <ThemeSwitcher className="fixed bottom-4 right-4" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderHamburger;
