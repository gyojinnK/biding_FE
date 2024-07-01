import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      accessToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    email: string;
    access_token: string;
  }
}
