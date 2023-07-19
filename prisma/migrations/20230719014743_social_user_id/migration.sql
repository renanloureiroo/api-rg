/*
  Warnings:

  - A unique constraint covering the columns `[social_user_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `social_user_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SocialType" AS ENUM ('GOOGLE', 'FACEBOOK');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "social_type" "SocialType" NOT NULL DEFAULT 'GOOGLE',
ADD COLUMN     "social_user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_social_user_id_key" ON "users"("social_user_id");
