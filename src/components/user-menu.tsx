"use client";

import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { AvatarIcon, ExitIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {/* <AvatarImage src="" alt="user-profile-image" /> */}
            <AvatarFallback>
              <AvatarIcon className="w-6 h-6 text-primary" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background drop-shadow-md">
          <DropdownMenuLabel className="text-primary">
            사용자 메뉴
            <p className="text-xs font-medium text-muted-foreground">
              {session?.data?.user.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push("/me")}>
              <UserIcon className="w-4 h-4 mr-2" />
              <p>마이페이지</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
            >
              <ExitIcon className="w-4 h-4 mr-2" />
              <p>로그아웃</p>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
