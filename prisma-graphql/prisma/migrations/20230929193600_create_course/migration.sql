-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "vl_name" TEXT NOT NULL,
    "vl_description" TEXT NOT NULL,
    "nm_duration" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);
