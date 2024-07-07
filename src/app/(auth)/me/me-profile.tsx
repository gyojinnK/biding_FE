"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetUserOutputDto } from "@/lib/openapi";
import { useSession } from "next-auth/react";

type TMeProfile = {
  myData: GetUserOutputDto | undefined;
};

const MeProfile: React.FC<TMeProfile> = ({ myData }) => {
  const session = useSession();

  console.log("Email: ", session.data?.user.email);
  console.log("AccessToken: ", session.data?.user.accessToken);

  return (
    <>
      {myData && (
        <div className="rounded-xl bg-primary flex items-center justify-start gap-2 p-4 my-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>NL</AvatarFallback>
          </Avatar>
          <div>
            <p>{myData.email}</p>
            <span>{myData.biography}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default MeProfile;
