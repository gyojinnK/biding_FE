"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

type TEnsureLogin = {};

const EnsureLogin: React.FC<TEnsureLogin> = ({}) => {
  const router = useRouter();
  const session = useSession();
  console.log("auth root: ", session?.data);
  useLayoutEffect(() => {
    if (!session?.data) {
      //   alert("로그인이 필요한 접근입니다.");
      router.push("/login");
    }
  }, []);
  return <></>;
};

export default EnsureLogin;
