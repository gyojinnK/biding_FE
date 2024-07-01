import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";
import { CardType } from "../types/types";
import GoodsCard from "@/components/ui/goods-card";
import { TExampleGoods } from "./page";
import { getAnimationProps } from "@/lib/utils/get-animation-props";

type TRecentAuction = {
  exampleGoodsList: TExampleGoods[];
};

const RecentAuction: React.FC<TRecentAuction> = ({ exampleGoodsList }) => {
  return (
    <section className="max-md:px-4">
      <Container>
        <div
          className="text-md flex justify-between items-center pb-4 "
          {...getAnimationProps("up", 500, 300)}
        >
          <p className="font-semibold text-2xl">최근에 등록된 경매</p>
          <Link href={"/auctions"} className="text-sm">
            + 더보기
          </Link>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {exampleGoodsList.map((goods, idx) => (
            <div
              key={`goods${goods.id}`}
              {...getAnimationProps("up", 500, idx * 100 + 200)}
            >
              <GoodsCard type={CardType.SMALL} goods={goods} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentAuction;
