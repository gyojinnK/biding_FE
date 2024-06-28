import Container from "@/components/ui/container";
import Banner from "./banner";
import TodayAuctionSection from "./today-auctions-section";
import RecentAuction from "./recent-auction";

export type TExampleGoods = {
  id: string;
  title: string;
  price: string;
  author: string;
  tags: string[];
};

const exampleGoods: TExampleGoods = {
  id: "1",
  title: "데일리 선글라스",
  price: "3500",
  author: "경매의 신",
  tags: ["악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
};

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10">
          <Banner />
          <TodayAuctionSection exampleGoods={exampleGoods} />
          <RecentAuction exampleGoods={exampleGoods} />
        </div>
      </Container>
    </>
  );
}
