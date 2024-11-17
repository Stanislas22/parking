-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfSpots" INTEGER NOT NULL,
    "hourlyRate" REAL NOT NULL,
    CONSTRAINT "Parking_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
