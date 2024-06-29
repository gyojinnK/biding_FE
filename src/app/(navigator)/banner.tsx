import Logo from "@/components/logo";
import Container from "@/components/ui/container";
import { getAnimationProps } from "@/lib/utils/get-animation-props";
import React from "react";

type TBanner = {};

const Banner: React.FC<TBanner> = ({}) => {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-6 py-20 max-md:py-10 items-center">
        <span
          className="text-4xl max-md:text-xl font-bold"
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="300"
        >
          &ldquo; 멈춰버린 가치에 새로운 가치를 &rdquo;
        </span>
        <h1
          className="text-6xl max-md:text-4xl font-black"
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="500"
        >
          중고물품 경매 플랫폼
        </h1>
        <div
          className="bg-primary-foreground w-full flex justify-center items-center"
          {...getAnimationProps("up", 500, 700)}
        >
          <Logo className="p-4" logoWidth={200} logoHeight={76} />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
