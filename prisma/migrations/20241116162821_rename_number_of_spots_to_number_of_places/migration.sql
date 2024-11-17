/*
  Warnings:

  - You are about to drop the column `numberOfSpots` on the `Parking` table. All the data in the column will be lost.
  - Added the required column `numberOfPlaces` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfPlaces" INTEGER NOT NULL,
    "hourlyRate" REAL NOT NULL,
    CONSTRAINT "Parking_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("city_id", "hourlyRate", "id", "location", "name") SELECT "city_id", "hourlyRate", "id", "location", "name" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
