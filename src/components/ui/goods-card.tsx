import { TExampleGoods } from "@/app/(navigator)/page";
import { CardType } from "@/app/types/types";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import Image from "next/image";
import { Button } from "./button";
import { Badge } from "./badge";
import { Separator } from "./separator";

type TGoodsCard = {
  type: CardType;
  goods: TExampleGoods;
};

// 이미지 -> 태그 -> 타이틀 -> 설명 -> 시작가 -> 상세보기

const GoodsCard: React.FC<TGoodsCard> = ({ type, goods }) => {
  return (
    <div>
      <Card>
        <CardHeader className="relative h-64">
          <Image
            src={goods.imageUrl}
            alt="goods-image"
            fill
            className="object-cover rounded-xl"
          />
          <Separator className="w-full" />
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-xs text-muted-foreground my-2">{goods.category}</p>
          <div className="">
            <p className="font-bold">{goods.title}</p>
            <p className="text-xs text-muted-foreground">{goods.description}</p>
            <span className="text-xl font-bold flex items-center gap-1">
              <p className="text-base text-primary inline-block">최저</p>{" "}
              {goods.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">상세보기</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GoodsCard;
