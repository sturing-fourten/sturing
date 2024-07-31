"use server";

import { signIn, signOut } from "@/auth";

// 로그인 및 회원가입
export async function githubLogin() {
  await signIn("github", { callbackUrl: "/" });
}

export async function logout() {
  await signOut({ redirect: true, redirectTo: "/" });
}

export async function kakaoLogin() {
  await signIn("kakao", { callbackUrl: "/" });
}
