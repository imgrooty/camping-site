import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import zod from "zod";

// id         Int       @id @default(autoincrement())
//   campName   String
//   location   String
//   type       CampTypes
//   PriceRange Float
//   images     String[]
//   listerId   Int
//   lister     Lister    @relation(fields: [listerId], references: [id])
//   Review     Review[]

const prisma = new PrismaClient();

const listingZod = zod.object({
  campName: zod.string(),
  location: zod.string(),
  type: zod.string(),
  priceRange: zod.number(),
});

export async function POST(req: NextRequest) {
  const listingBody = await req.json();
  const listerId = req.nextUrl.searchParams.get("id") || "";

  const validInput = listingZod.safeParse(listingBody);
  if (!validInput.success) {
    return NextResponse.json(
      {
        msg: "Invalid input type",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const newListing = await prisma.listing.create({
      data: {
        campName: listingBody.campName,
        location: listingBody.location,
        type: listingBody.type,
        PriceRange: listingBody.priceRange,
        listerId: parseInt(listerId),
      },
    });
    if (newListing) {
      return NextResponse.json({
        newListing,
      });
    }
  } catch (e) {
    return NextResponse.json({
      msg: `error creating listing: ${e}`,
    });
  }
}

export function GET() {
  return NextResponse.json({
    msg: "Hi from api/listing",
  });
}
