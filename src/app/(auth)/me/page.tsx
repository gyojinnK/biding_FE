import Container from "@/components/ui/container";
import React from "react";
import MeProfile from "./me-profile";
import { getMe } from "./actions";
import { getUserSession } from "@/server/auth/authentication";

const MePage = async () => {
  const [myData] = await Promise.all([getMe()]);

  return (
    <div>
      <Container>
        <MeProfile myData={myData} />
      </Container>
    </div>
  );
};

export default MePage;
