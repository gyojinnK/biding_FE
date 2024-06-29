import Container from "@/components/ui/container";
import Banner from "./banner";
import TodayAuctionSection from "./today-auctions-section";
import RecentAuction from "./recent-auction";

export type TExampleGoods = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  author: string;
  imageUrl: string;
  tags: string[];
};

const exampleGoods: TExampleGoods = {
  id: "1",
  title: "데일리 선글라스",
  description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
  category: "패션 > 악세서리",
  price: "3500",
  author: "경매의 신",
  imageUrl: "/images/example-goods-image.jpg",
  tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
};

const exampleGoodsList: TExampleGoods[] = [
  {
    id: "1",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "2",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "3",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "4",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "5",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "6",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "7",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "8",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "9",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "10",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "11",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
  {
    id: "12",
    title: "데일리 선글라스",
    description: "[갱스터 단독] 데일리로 착용하기 좋은 틴트 선글라스.",
    category: "패션 > 악세서리",
    price: "3500",
    author: "경매의 신",
    imageUrl: "/images/example-goods-image.jpg",
    tags: ["패션 > 악세서리", "저렴한 시작가", "10대~20대", "안경/선글라스"],
  },
];

export default function Home() {
  return (
    <>
      <Container className="pb-20">
        <div className="flex flex-col gap-10 max-md:gap-8">
          <Banner />
          <TodayAuctionSection exampleGoods={exampleGoods} />
          <RecentAuction exampleGoodsList={exampleGoodsList} />
        </div>
      </Container>
    </>
  );
}
