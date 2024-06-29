import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./theme-switcher";

const HeaderHamburger = () => {
  return (
    <div className="relative md:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Bars3Icon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="p-0">
          <Table className="w-full">
            <TableBody className="w-full">
              {/* <TableRow>
                <TableCell className="text-xl">
                  <SheetClose asChild>
                    <Link href={"/notices"}>공지사항</Link>
                  </SheetClose>
                </TableCell>
              </TableRow> */}
              <TableRow>
                <TableCell className="text-xl">
                  <SheetClose asChild>
                    <Link href={"/service"}>서비스 소개</Link>
                  </SheetClose>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xl">
                  <SheetClose asChild>
                    <Link href={"/goods"}>상품목록</Link>
                  </SheetClose>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xl">
                  <SheetClose asChild>
                    <Link href={"/auctions"}>경매목록</Link>
                  </SheetClose>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xl text-primary-base/500">
                  <SheetClose asChild>
                    <Link href={"/login"}>로그인/회원가입</Link>
                  </SheetClose>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ThemeSwitcher className="fixed bottom-4 right-4" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderHamburger;
