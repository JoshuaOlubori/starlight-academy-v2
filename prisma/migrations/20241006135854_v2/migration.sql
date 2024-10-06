/*
  Warnings:

  - Added the required column `income_level` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_highest_education_level` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internet_access_at_home` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takes_external_tutorship` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_of_employment` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_highest_education_level` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClubCategory" AS ENUM ('Sports', 'Arts', 'Academic', 'Cultural', 'Other');

-- CreateEnum
CREATE TYPE "Infraction" AS ENUM ('Bullying', 'Fighting', 'Disruption', 'Cheating', 'Other');

-- CreateEnum
CREATE TYPE "Consequence" AS ENUM ('Detention', 'Suspension', 'Expulsion', 'Counseling', 'Other');

-- CreateEnum
CREATE TYPE "StudentClubRole" AS ENUM ('Member', 'President', 'VicePresident', 'Secretary', 'Other');

-- CreateEnum
CREATE TYPE "department_enum" AS ENUM ('science', 'arts', 'commerce', 'none');

-- CreateEnum
CREATE TYPE "incomelevel" AS ENUM ('Below50k', 'Between50kTo100k', 'Between100kTo200k', 'Between200kTo500k', 'Between500kTo1m', 'Between1mTo2m', 'Between2mTo5m', 'Above5m');

-- CreateEnum
CREATE TYPE "educationlevel" AS ENUM ('Primary', 'Secondary', 'Vocational', 'Diploma', 'Bachelor', 'Master', 'Doctoral', 'Other');

-- AlterTable
ALTER TABLE "Parent" ADD COLUMN     "income_level" "incomelevel" NOT NULL,
ADD COLUMN     "parent_highest_education_level" "educationlevel" NOT NULL,
ADD COLUMN     "parent_support_index" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "department" "department_enum" NOT NULL,
ADD COLUMN     "disability" TEXT,
ADD COLUMN     "internet_access_at_home" BOOLEAN NOT NULL,
ADD COLUMN     "is_boarding" BOOLEAN,
ADD COLUMN     "mental_health_score" INTEGER,
ADD COLUMN     "number_of_siblings" INTEGER,
ADD COLUMN     "takes_external_tutorship" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "date_of_employment" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "teacher_highest_education_level" "educationlevel" NOT NULL,
ADD COLUMN     "years_of_experience_before_joining" INTEGER;

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "ClubCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student_Club" (
    "studentId" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "joinDate" TIMESTAMP(3) NOT NULL,
    "role" "StudentClubRole" NOT NULL,

    CONSTRAINT "Student_Club_pkey" PRIMARY KEY ("studentId","clubId")
);

-- CreateTable
CREATE TABLE "disciplinary_record" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "incidentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "incidentDescription" TEXT,
    "infraction" "Infraction" NOT NULL,
    "consequence" "Consequence" NOT NULL,
    "consequenceDetails" TEXT,
    "reportedBy" TEXT,
    "reportedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "disciplinary_record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_name_key" ON "Club"("name");

-- AddForeignKey
ALTER TABLE "Student_Club" ADD CONSTRAINT "Student_Club_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student_Club" ADD CONSTRAINT "Student_Club_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplinary_record" ADD CONSTRAINT "disciplinary_record_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
