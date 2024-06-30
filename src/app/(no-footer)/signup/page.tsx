import Container from "@/components/ui/container";
import React from "react";
import { getAnimationProps } from "@/lib/utils/get-animation-props";
import { SignUpForm } from "./sign-up-form";
import Script from "next/script";

type TSignUpPage = {};

const SignUpPage: React.FC<TSignUpPage> = ({}) => {
  return (
    <div className="">
      <Container className="bg-background md:my-8 pt-8 px-6 md:rounded-xl md:border md:border-primary">
        <div className="mb-8">
          <p
            className="text-xl font-bold text-primary mb-3"
            {...getAnimationProps("fade", 500, 0)}
          >
            회원가입
          </p>
          <span
            className="text-sm max-md:text-xs font-medium text-muted-foreground "
            {...getAnimationProps("fade", 500, 200)}
          >
            사용하던 물품을 등록해보세요.
            <br /> 가치가 떨어진 물품에{" "}
            <p className="inline-block text-primary font-semibold">
              새로운 가치
            </p>
            를 제공할 기회입니다.
          </span>
        </div>
        <SignUpForm />
      </Container>
    </div>
  );
};

export default SignUpPage;
