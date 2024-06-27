import React from "react";
import { CardType } from "../types";
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
      <div className="flex items-center gap-2 pb-4">
        {exampleGoods.tags.map((tag) => (
          <Badge className="bg-muted-foreground text-background cursor-default">
            <TagIcon className="w-3 h-3 text-background mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
      <div className="w-full py-32 relative ">
        <Image
          src="/images/example-goods-image.jpg"
          alt="goods"
          fill
          className="object-cover w-full rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-2">
          <p className="font-bold text-3xl">{exampleGoods.title}</p>
          <Separator
            orientation="vertical"
            className="h-5 bg-muted-foreground"
          />
          <span className="font-medium text-sm text-muted-foreground">
            경매시작가{" "}
            <p className="inline-block text-primary">{exampleGoods.price}원</p>
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
