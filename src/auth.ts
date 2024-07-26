import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import { authConfig } from "./authConfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID,
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET,
    }),
  ],
});
