import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth(NEXT_AUTH);

export const POST = handler;
export const GET = handler;