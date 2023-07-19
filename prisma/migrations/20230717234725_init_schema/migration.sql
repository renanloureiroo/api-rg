-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "avatar" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated-at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allergies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "allergies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_profiles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "food_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_allergies" (
    "user_id" TEXT NOT NULL,
    "allergy_id" TEXT NOT NULL,

    CONSTRAINT "user_allergies_pkey" PRIMARY KEY ("user_id","allergy_id")
);

-- CreateTable
CREATE TABLE "user_food_profiles" (
    "user_id" TEXT NOT NULL,
    "food_profile_id" TEXT NOT NULL,

    CONSTRAINT "user_food_profiles_pkey" PRIMARY KEY ("user_id","food_profile_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "allergies_name_key" ON "allergies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "food_profiles_name_key" ON "food_profiles"("name");

-- AddForeignKey
ALTER TABLE "user_allergies" ADD CONSTRAINT "user_allergies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_allergies" ADD CONSTRAINT "user_allergies_allergy_id_fkey" FOREIGN KEY ("allergy_id") REFERENCES "allergies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_food_profiles" ADD CONSTRAINT "user_food_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_food_profiles" ADD CONSTRAINT "user_food_profiles_food_profile_id_fkey" FOREIGN KEY ("food_profile_id") REFERENCES "food_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
