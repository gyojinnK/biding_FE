import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";
import { CardType } from "../types/types";
import { TExampleGoods } from "./page";
import TodayAuctionCard from "./today-auction-card";
import { getAnimationProps } from "@/lib/utils/get-animation-props";

type TTodayAuction = {
  exampleGoods: TExampleGoods;
};

const TodayAuction: React.FC<TTodayAuction> = ({ exampleGoods }) => {
  return (
    <section {...getAnimationProps("fade", 500, 100)} className="max-md:px-4">
      <Container className="rounded-2xl p-4 bg-muted">
        <div className="text-md flex justify-between items-start pb-2">
          <p className="font-semibold text-2xl">오늘의 경매</p>
          <Link href={"/auctions"} className="text-sm">
            + 더보기
          </Link>
        </div>
        <div>
          <TodayAuctionCard type={CardType.LARGE} exampleGoods={exampleGoods} />
        </div>
      </Container>
    </section>
  );
};

export default TodayAuction;
