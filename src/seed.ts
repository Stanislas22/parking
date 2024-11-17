import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.city.createMany({
        data : [
        { name: "Aix-en-Provence", slug: "aix-en-provence", location: "43.533329, 5.43333", country: "France" },
      { name: "La Spezia", slug: "la-spezia", location: "44.238366, 9.6912326", country: "Italie" },
      { name: "Aix-la-Chapelle", slug: "aix-la-chapelle", location: "50.77635, 6.083862", country: "Allemagne" },
      { name: "San Cristobal de la Laguna", slug: "san-cristobal-de-la-laguna", location: "28.487180709838867, -16.313879013061523", country: "Espagne" },
      { name: "Newcastle", slug: "newcastle", location: "54.973847, -1.6131572", country: "Angleterre" },
    ],
    
    
    });

    await prisma.parking.createMany({
        data: [
          { name: "Parking A", location: "43.533329, 5.43333", numberOfPlaces: 100, hourlyRate: 4.5, city_id: 1 },
          { name: "Parking B", location: "44.238366, 9.6912326", numberOfPlaces: 50, hourlyRate: 3, city_id: 2 },
          { name: "Parking C", location: "44.238366, 9.6912326", numberOfPlaces: 80, hourlyRate: 2.5, city_id: 2 },
          { name: "Parking D", location: "50.77635, 6.083862", numberOfPlaces: 40, hourlyRate: 2.8, city_id: 3 },
          { name: "Parking E", location: "28.487180709838867, -16.313879013061523", numberOfPlaces: 70, hourlyRate: 3.1, city_id: 4 },
          { name: "Parking F", location: "54.973847, -1.6131572", numberOfPlaces: 60, hourlyRate: 2.4, city_id: 5 },
          { name: "Parking G", location: "54.973847, -1.6131572", numberOfPlaces: 90, hourlyRate: 3.2, city_id: 5 },
        ],
    });
    
    
    await prisma.spot.createMany({
        data: [
          { parkingId: 1 },
          { parkingId: 1 },
          { parkingId: 2 },
          { parkingId: 2 },
          { parkingId: 3 },
          { parkingId: 3 },
          { parkingId: 4 },
        ],
      });
      
    await prisma.park.createMany({
        data: [
          {
            id: "park1",
            startedAt: new Date("2024-11-01T08:00:00"),
            endedAt: new Date("2024-11-01T10:00:00"),
            vehicleNumberPlate: "ABC-123",
            spotId: 1,
            price: 9.0,
          },
          {
            id: "park2",
            startedAt: new Date("2024-11-02T09:00:00"),
            endedAt: null,
            vehicleNumberPlate: "DEF-456",
            spotId: 2,
            price: 0,
          },
          {
            id: "park3",
            startedAt: new Date("2024-11-03T11:00:00"),
            endedAt: new Date("2024-11-03T12:30:00"),
            vehicleNumberPlate: "GHI-789",
            spotId: 3,
            price: 4.5,
          },
        ],
      });
     

    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
