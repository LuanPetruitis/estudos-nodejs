/*
  Warnings:

  - Added the required column `vl_password` to the `prisma_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prisma_users" ADD COLUMN     "vl_password" TEXT NOT NULL;
