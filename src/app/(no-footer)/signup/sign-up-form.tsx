"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { getAnimationProps } from "@/lib/utils/get-animation-props";
import { useRouter } from "next/navigation";
import { useAction } from "@/hooks/use-action";
import { TAddr } from "@/app/types";
import Script from "next/script";

type TSignUpForm = {};

const SignUpForm = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TSignUpForm
>((props, ref) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isEmailCodeModalOpen, setIsEmailCodeModalOpen] =
    useState<boolean>(false);
  const [isEmailAuthentication, setIsEmailAuthentication] =
    useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  //   const createUserAction = useAction(createUser);
  const router = useRouter();
  const formSchema = z.object({
    email: z
      .string()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "이메일이 유효하지 않습니다.",
      })
      .min(2),
    name: z.string(),
    password: z
      .string()
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()])/, {
        message: "비밀번호가 유효하지 않습니다.",
      })
      .min(3),
    confirmPassword: z
      .string()
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()])/, {
        message: "비밀번호가 유효하지 않습니다.",
      })
      .min(3),
    phoneNumber: z.string(),
    address: z.string(),
    addressDetail: z.string(),
  });

  const checkEmailHandler = () => {
    if (form.getValues("password") === form.getValues("confirmPassword")) {
      setCheckPassword(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }

    if (form.getValues("email") && checkPassword && isCheck) {
      setIsEmailCodeModalOpen(true);
    }
  };

  const onSubmit = async () => {
    console.log("Pass!!");
    // add login logic
    // const response = await createUserAction({
    //   email: form.getValues("email"),
    //   name: form.getValues("name"),
    //   password: form.getValues("password"),
    //   phoneNumber: form.getValues("phoneNumber"),
    // });

    // console.log(response);

    // if (response) {
    //   alert("회원가입이 완료되었습니다.");
    //   router.push("/login");
    // } else {
    //   alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    // }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
      addressDetail: "",
    },
  });

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: TAddr) {
        (document.getElementById("address") as HTMLInputElement).value =
          data.address;
        document.getElementById("addressDetail")?.focus();
      },
    }).open();
  };

  return (
    <div ref={ref} {...props}>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          {...getAnimationProps("fade", 500, 0)}
          className="pb-12"
        >
          <Label htmlFor="email" className="inline-block pb-2">
            이메일
          </Label>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="example@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label htmlFor="name" className="inline-block pb-2">
            이름
          </Label>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormControl>
                  <Input {...field} id="name" placeholder="홍길동" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label htmlFor="password" className="inline-block pb-2">
            비밀번호
          </Label>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label htmlFor="confirmPassword" className="inline-block pb-2">
            비밀번호 확인
          </Label>
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    id="confirmPassword"
                    placeholder="비밀번호를 다시 입력해주세요."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label htmlFor="phoneNumber" className="inline-block pb-2">
            전화번호
          </Label>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormControl>
                  <Input
                    {...field}
                    id="phoneNumber"
                    placeholder="010-1234-1234"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label htmlFor="address" className="inline-block pb-2">
            주소
          </Label>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="mb-1">
                <FormControl>
                  <Input
                    {...field}
                    id="address"
                    placeholder="주소를 입력해주세요."
                    onClick={onClickAddr}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressDetail"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    {...field}
                    id="addressDetail"
                    placeholder="상세주소를 입력해주세요."
                    onClick={onClickAddr}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-8 text-sm font-medium text-muted-foreground text-center">
            <p>이미 계정이 있으신가요?</p>
            <Link href={"/login"}>
              <p className="text-primary hover:underline font-semibold">
                로그인
              </p>
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full text-base font-bold text-background bg-primary rounded-full"
          >
            가입하기
          </Button>
        </form>
      </Form>
    </div>
  );
});

SignUpForm.displayName = "SignUpForm";

export { SignUpForm };
