import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import zod from "zod";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const signinZod = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const authOptions = {
  pages: {
    signIn: "/signin",
    error: "/signin",
    verifyRequest: "/signin",
    newUser: "/signin",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "johndoe123@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "123456",
        },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const validInput = signinZod.safeParse(credentials);
        if (!validInput.success) {
          return null;
        }

        try {
          const existingUser = await prisma.lister.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!existingUser) {
            return null;
          }

          const validPassword = await bcrypt.compare(
            credentials.password,
            existingUser?.password
          );

          if (existingUser && validPassword) {
            return {
              id: existingUser.id.toString(),
              fullName: existingUser.fullName,
              email: existingUser.email,
            };
          }
        } catch (e) {
          console.error("Error in authorize:", e);
        }

        return null; // Ensure null is returned when authentication fails.
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
        token.fullName = user.fullName as string;
      }
      console.log(token);
      return token;
    },

    async session({ token, session }: { token: JWT; session: Session }) {
      if (session.user) {
        (session.user as any).id = token.id as string;
        (session.user as any).email = token.email as string;
        (session.user as any).fullName = token.fullName as string;
        console.log("session: ", session);
      }

      return session;
    },
  },
};
