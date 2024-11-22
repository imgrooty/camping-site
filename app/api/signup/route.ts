import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import zod from "zod";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

const signupZod = zod.object({
  fullName: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});

export async function POST(req: NextRequest) {
  const reqBody = await req.json(); // way to get body as request in nextjs
  // const authHeader = req.headers.get("authorization") // way to get header as request in nextjs
  // const queryParam = req.nextUrl.searchParams.get("name") // way to get query parameter as request in nextjs

  const validInput = signupZod.safeParse(reqBody);
  if (!validInput.success) {
    return NextResponse.json(
      {
        msg: "Invalid Input",
      },
      {
        status: 400,
      }
    );
  }

  const existingUser = await prisma.lister.findUnique({
    where: {
      email: reqBody.email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        msg: "User already exists. Try with another email",
      },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(reqBody.password, 10)

  const newLister = await prisma.lister.create({
    data: {
      fullName: reqBody.fullName,
      email: reqBody.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    msg: "Lister signed up successfully",
    newLister,
  });
}
