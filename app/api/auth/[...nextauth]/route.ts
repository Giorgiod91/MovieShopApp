import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import githubProvider from "next-auth/providers/github";
import { NextResponse } from "next/server";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();

const handler = NextAuth({
 
  adapter: PrismaAdapter(prisma),
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
 
});

export { handler as GET, handler as POST };
