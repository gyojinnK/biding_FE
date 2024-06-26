import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";

type TUtilsPage = {};

const UtilsPage: React.FC<TUtilsPage> = ({}) => {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold text-center">Utils Page</h1>
      <Link href="/utilities/use-loading">Go to Use Loading Page</Link>
    </Container>
  );
};

export default UtilsPage;
