"use client";

import React from "react";
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
import { getAnimationProps } from "@/lib/utils/get-animation-props";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

type TLoginForm = {};

const LoginForm: React.FC<TLoginForm> = ({}) => {
  const router = useRouter();
  const formSchema = z.object({
    email: z
      .string()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "이메일이 유효하지 않습니다.",
      })
      .min(2),
    password: z
      .string()
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()])/, {
        message: "비밀번호가 유효하지 않습니다.",
      })
      .min(3),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-3" {...getAnimationProps("up", 500, 0)}>
              <FormControl>
                <Input {...field} placeholder="이메일" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem {...getAnimationProps("up", 500, 200)}>
              <FormControl>
                <Input {...field} type="password" placeholder="비밀번호" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className="text-center py-8"
          {...getAnimationProps("up", 500, 500)}
        >
          <p className="text-sm max-md:text-xs font-medium text-muted-foreground">
            아직 회원이 아니신가요?
          </p>
          <Link
            href={"/signup"}
            className="text-primary hover:underline text-sm font-semibold"
          >
            회원가입
          </Link>
        </div>
        <Button
          {...getAnimationProps("up", 500, 300)}
          type="submit"
          className="w-full text-base font-bold text-background bg-primary rounded-full mb-16"
        >
          로그인
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
