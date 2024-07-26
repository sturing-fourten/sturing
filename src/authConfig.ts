import type { NextAuthConfig } from "next-auth";
import generateRandomNickName from "random-korean-nickname-generator";
import connectDB from "./lib/database/db";
import { User } from "./schema/userSchema";

export const authConfig = {
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
            sturingIndex: 50,
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
            sturingIndex: 50,
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
  providers: [
    /**
     * 초기 값 빈 배열
     */
  ],
} satisfies NextAuthConfig;
