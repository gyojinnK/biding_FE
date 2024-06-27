import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";
import { CardType } from "../types";
import GoodsCard from "@/components/ui/goods-card";
import { TExampleGoods } from "./page";

type TRecentAuction = {
  exampleGoods: TExampleGoods;
};

const RecentAuction: React.FC<TRecentAuction> = ({ exampleGoods }) => {
  return (
    <section>
      <Container>
        <div className="text-md flex justify-between items-center pb-4 ">
          <p className="font-semibold text-2xl">최근에 등록된 경매</p>
          <Link href={"/auctions"} className="text-sm">
            + 더보기
          </Link>
        </div>
        <div>
          <GoodsCard type={CardType.SMALL} exampleGoods={exampleGoods} />
        </div>
      </Container>
    </section>
  );
};

export default RecentAuction;
