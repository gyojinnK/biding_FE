import React from "react";
import LoginForm from "./login-form";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getAnimationProps } from "@/lib/utils/get-animation-props";
import Link from "next/link";
import Logo from "@/components/logo";

type TLoginPage = {};

const LoginPage: React.FC<TLoginPage> = ({}) => {
  return (
    <div className="">
      <Container
        className="bg-background md:mt-8 pt-16 px-6 md:rounded-xl md:border md:border-primary"
        {...getAnimationProps("fade", 500, 0)}
      >
        <div className="mb-8">
          <p
            className="text-2xl font-bold pb-2"
            {...getAnimationProps("left", 500, 0)}
          >
            로그인
          </p>
          <span
            className="text-sm max-md:text-xs font-medium text-muted-foreground"
            {...getAnimationProps("right", 500, 200)}
          >
            <Logo logoWidth={48} className="inline-block" />
            에 가입하고
            <br />
            중고상품을 경매에 등록하거나 입찰해보세요!
          </span>
        </div>
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
