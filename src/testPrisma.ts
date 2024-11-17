import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testPrisma() {
  try {
    const cities = await prisma.city.findMany();
    console.log(cities);
    const spots = await prisma.spot.findMany();
    console.log("Spots:", spots);

    const parks = await prisma.park.findMany();
    console.log("Parks:", parks);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();
