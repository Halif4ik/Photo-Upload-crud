-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "dateMode" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "bio" TEXT,
    "linkedIn" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "website" TEXT,
    "goals" TEXT,
    "gender" TEXT,
    "sexuality" TEXT,
    "partner" TEXT,
    "icebreaker" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_deviceId_key" ON "User"("deviceId");
