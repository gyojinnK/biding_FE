import Header from "@/components/header";
import React from "react";

const NoFooterLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-screen min-h-screen">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
};

export default NoFooterLayout;
