import React from "react";

type TLogo = {};

const Logo: React.FC<TLogo> = ({}) => {
  return (
    <span className="text-xl font-extrabold text-foreground">
      코드스테이션 보일러플레이트
    </span>
  );
};

export default Logo;
