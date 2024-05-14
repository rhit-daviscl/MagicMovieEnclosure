/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "MovieMusicHome" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "s3id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "MovieMusicHome_pkey" PRIMARY KEY ("id")
);
