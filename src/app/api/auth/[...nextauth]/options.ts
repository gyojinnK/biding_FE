import { login } from "@/server/auth/authentication";
import { User, getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        console.log(email);
        console.log(password);
        if (!email || !password) {
          return null;
        }

        try {
          const response = await login({ email, password });
          if (response) {
            return {
              id: response.user.id,
              email: response.user.email,
              accessToken: response.accessToken,
            } as User;
          }
        } catch (error) {
          throw new Error("Server: 로그인에 실패했습니다.");
        }
        throw new Error("Authorize: 로그인에 실패했습니다.");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      return {
        ...token,
        ...user,
      };
    },
    session: async ({ session, token, user }) => {
      session.user = {
        id: token.id,
        email: token.email,
        accessToken: token.access_token,
      };
      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24, // 1일
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
