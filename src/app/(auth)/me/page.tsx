import Container from "@/components/ui/container";
import React from "react";
import MeProfile from "./me-profile";
import { useSession } from "next-auth/react";

const MePage = async () => {
  const { data: session } = useSession();

  return (
    <div>
      <Container>
        <MeProfile />
      </Container>
    </div>
  );
};

export default MePage;
