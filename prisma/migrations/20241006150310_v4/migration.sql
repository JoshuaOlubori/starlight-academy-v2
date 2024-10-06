/*
  Warnings:

  - The primary key for the `Club` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Student_Club` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id` on the `Club` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Student_Club" DROP CONSTRAINT "Student_Club_clubId_fkey";

-- DropForeignKey
ALTER TABLE "Student_Club" DROP CONSTRAINT "Student_Club_studentId_fkey";

-- AlterTable
ALTER TABLE "Club" DROP CONSTRAINT "Club_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Club_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Student_Club";

-- CreateTable
CREATE TABLE "_ClubToStudent" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClubToStudent_AB_unique" ON "_ClubToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClubToStudent_B_index" ON "_ClubToStudent"("B");

-- AddForeignKey
ALTER TABLE "_ClubToStudent" ADD CONSTRAINT "_ClubToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Club"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubToStudent" ADD CONSTRAINT "_ClubToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
