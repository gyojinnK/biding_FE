import { TExampleGoods } from "@/app/(navigator)/page";
import { CardType } from "@/app/types";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

type TGoodsCard = {
  type: CardType;
  exampleGoods: TExampleGoods;
};

const GoodsCard: React.FC<TGoodsCard> = ({ type, exampleGoods }) => {
  return (
    <div>
      <Card>
        <CardHeader></CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default GoodsCard;

// page에 testData 더 추가하고 리스트로 "최근에 등록된 경매" 카드로 제작하기
