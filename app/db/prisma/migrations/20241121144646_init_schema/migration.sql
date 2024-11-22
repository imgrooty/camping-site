-- CreateEnum
CREATE TYPE "CampTypes" AS ENUM ('Sports', 'Adventure', 'Stem', 'Art', 'Nature', 'Academic', 'Oldage', 'Sleepaway');

-- CreateTable
CREATE TABLE "Lister" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Lister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "campName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" "CampTypes" NOT NULL,
    "PriceRange" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "listerId" INTEGER NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "comment" TEXT NOT NULL,
    "listingId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lister_email_key" ON "Lister"("email");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_listerId_fkey" FOREIGN KEY ("listerId") REFERENCES "Lister"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
