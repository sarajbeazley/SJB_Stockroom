/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Collections` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Artwork" ADD COLUMN     "date" INTEGER,
ADD COLUMN     "medium" TEXT,
ADD COLUMN     "price" TEXT,
ADD COLUMN     "size" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Collections_name_key" ON "Collections"("name");
