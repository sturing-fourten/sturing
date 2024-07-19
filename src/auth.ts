import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import connectDB from "./lib/database/db";
import generateRandomNickName from "random-korean-nickname-generator";
import { User } from "./schema/userSchema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }: { user: any; account: any }) => {
      if (account?.provider === "github") {
        const { name, email, image } = user;
        await connectDB();
        const existingUser = await User.findOne({
          email,
          authProvider: "github",
        });
        if (!existingUser) {
          const newUser = await new User({
            name,
            email,
            nickname: generateRandomNickName(),
            profileImageUrl: image,
            authProvider: "github",
          }).save();
          user.id = newUser._id;
        } else {
          user.id = existingUser._id;
        }
        return true;
      } else if (account?.provider === "kakao") {
        const { name, email, image } = user;
        await connectDB();
        const existingUser = await User.findOne({
          email,
          authProvider: "kakao",
        });
        if (!existingUser) {
          const newUser = await new User({
            name,
            email,
            nickname: generateRandomNickName(),
            profileImageUrl: image,
            authProvider: "kakao",
          }).save();
          user.id = newUser._id;
        } else {
          user.id = existingUser._id;
        }
        return true;
      } else {
        return true;
      }
    },
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      if (user && user.id) {
        token.id = user.id;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && token.id) {
        session = token;
      }
      return session;
    },
  },
});
