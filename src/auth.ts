import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import connectDB from "./lib/database/db";
import generateRandomNickName from "random-korean-nickname-generator";
import { User } from "./schema/userSchema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }: { user: any; account: any }) => {
      console.log("signIn", user, account); // 임시
      if (account?.provider === "github") {
        const { name, email, image } = user;
        await connectDB();
        const existingUser = await User.findOne({
          email,
          authProvider: "github",
        });
        if (!existingUser) {
          await new User({
            name,
            email,
            nickname: generateRandomNickName(),
            profileImageUrl: image,
            authProvider: "github",
          }).save();
        }
        return true;
      } else {
        return true;
      }
    },
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      if (user) {
        token.id = user.id;
        token.accessToken = account.access_token;
      }
      console.log("jwt", token, user, account); // 임시
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session = token;
      }
      return session;
    },
  },
});
