import React from "react";
import { CardType } from "../types/types";
import { TExampleGoods } from "./page";
import { Badge } from "@/components/ui/badge";
import { ArrowTopRightOnSquareIcon, TagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type TTodayAuctionCard = { type: CardType; exampleGoods: TExampleGoods };

const TodayAuctionCard: React.FC<TTodayAuctionCard> = ({
  type,
  exampleGoods,
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 max-md:gap-1 pb-2 max-md:hidden">
        {exampleGoods.tags.map((tag, idx) => (
          <Badge
            key={idx}
            className="bg-muted-foreground text-background max-md:text-[8px] cursor-default"
          >
            <TagIcon className="w-3 h-3 text-background mr-1 max-md:hidden" />
            <p className="md:hidden mr-1">#</p> {tag}
          </Badge>
        ))}
      </div>
      <p className="text-muted-foreground text-xs pb-2">
        {exampleGoods.category}
      </p>
      <div className="w-full py-32 relative ">
        <Image
          src="/images/example-goods-image.jpg"
          alt="goods"
          fill
          className="object-cover w-full rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="flex max-md:flex-col max-md:items-start items-center gap-2 max-md:gap-0">
          <p className="font-bold text-3xl max-md:text-xl">
            {exampleGoods.title}
          </p>
          <Separator
            orientation="vertical"
            className="h-5 bg-muted-foreground max-md:hidden"
          />
          <span className="font-medium text-sm text-muted-foreground">
            경매시작가{" "}
            <p className="inline-block text-primary">
              {exampleGoods.price.replace(
                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                ","
              )}
              원
            </p>
          </span>
        </div>
        <div className="">
          <Button className="text-sm bg-primary rounded-2xl">
            <ArrowTopRightOnSquareIcon className="w-4 h-4 text-primary-foreground mr-2" />
            <p className="font-semibold text-md inline-block text-primary-foreground">
              참여하기
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodayAuctionCard;
