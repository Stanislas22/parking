import{Database} from "bun:sqlite";
import { toSlug } from "../utils/toSlug";

 export const db = new Database("parking.sqlite",{create :true});
db.run(`DELETE FROM cities`);
db.run(`
    CREATE TABLE IF NOT EXISTS "cities" (
"id" INTEGER NOT NULL,
"name" TEXT NOT NULL UNIQUE,
"slug" TEXT NOT NULL UNIQUE,
"location" TEXT,
"country" TEXT NOT NULL,
PRIMARY KEY("id" AUTOINCREMENT)
);
    `);


    db.run(`DELETE FROM parkings`);
db.run(`
    CREATE TABLE  IF NOT EXISTS "parkings" (
"id" INTEGER NOT NULL,
"name" TEXT NOT NULL UNIQUE,
"location" TEXT,
"numberOfPlaces" INTEGER NOT NULL,
"opened" INTEGER NOT NULL DEFAULT 1,
"hourlyRate" REAL NOT NULL,
"city_id" INTEGER NOT NULL,
PRIMARY KEY("id" AUTOINCREMENT),
FOREIGN KEY("city_id") REFERENCES "cities"("id")
);

    `);

   // db.run(`DELETE FROM parks`);
db.run(`
    CREATE TABLE IF NOT EXISTS "parks" (
"id" TEXT NOT NULL UNIQUE,
"startedAt" TEXT NOT NULL,
"endedAt" TEXT,
"vehicleNumberPlate" TEXT,
"spot_id" INTEGER NOT NULL,
"price" REAL NOT NULL DEFAULT 0,
PRIMARY KEY("id"),
FOREIGN KEY("spot_id") REFERENCES "spots"("id")
);
    `);

  //  db.run(`DELETE FROM spots`);
db.run(`
    CREATE TABLE IF NOT EXISTS "spots" (
"id" INTEGER NOT NULL,
"parking_id" INTEGER NOT NULL,
PRIMARY KEY("id" AUTOINCREMENT),
FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
);
    
    
    `);
db.run(`
        INSERT INTO cities (name, slug, location, country) VALUES
          ('Aix-en-Provence', 'aix-en-provence', '43.533329, 5.43333', 'France'),
          ('La Spezia', 'la-spezia', '44.238366, 9.6912326', 'Italie'),
          ('Aix-la-Chapelle', 'aix-la-chapelle', '50.77635, 6.083862', 'Allemagne'),
          ('San Cristobal de la Laguna', 'san-cristobal-de-la-laguna', '28.487180709838867, -16.313879013061523', 'Espagne'),
          ('Newcastle', 'newcastle', '54.973847, -1.6131572', 'Angleterre') 
      `);
db.run(`
        INSERT INTO parkings (name, location, numberOfPlaces, hourlyRate, city_id) VALUES
          ('Parking A', '43.533329, 5.43333', 100, 4.5, 1),
          ('Parking B', '44.238366, 9.6912326', 50, 3, 2),
          ('Parking C', '44.238366, 9.6912326', 80, 2.5, 2),
          ('Parking D', '50.77635, 6.083862', 40, 2.8, 3),
          ('Parking E', '28.487180709838867, -16.313879013061523', 70, 3.1, 4),
          ('Parking F', '54.973847, -1.6131572', 60, 2.4, 5),
          ('Parking G', '54.973847, -1.6131572', 90, 3.2, 5)
      `);


      function generateUniqueSlug(name: string, existingSlugs: Set<String>): String {
         var slug = toSlug(name);
        let counter = 1;
      
        while (existingSlugs.has(slug)) {
          slug = `${toSlug(name)}-${counter}`;
          counter++;
        }
      
        existingSlugs.add(slug);
        return slug;
      }
      
     
      
 

console.log("Database réussi");