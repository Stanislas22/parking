-- CreateTable
CREATE TABLE "Park" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME,
    "vehicleNumberPlate" TEXT NOT NULL,
    "spotId" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Park_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parkingId" INTEGER NOT NULL,
    CONSTRAINT "Spot_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
