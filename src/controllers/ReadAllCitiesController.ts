import { Context } from "hono";
import ReadAllCitiesView from "../views/city/ReadAllCitiesView";
import { Database } from "sqlite";
import { db } from "../dataBase/initializeDatabase";
import City from "../models/City";
import Parking from "../models/Parking";
import { HTTPException } from "hono/http-exception";
import { PrismaClient } from "@prisma/client";
import { CityDTO } from "../DTO/CityDTO";
import { ParkingDTO } from "../DTO/ParkingDTO";
const prisma = new PrismaClient();

const ReadAllCitiesController = async(c:Context)=>{
    try{
    const citiesData = await prisma.city.findMany({
        include:{parkings:true}
    });
    const cities = citiesData.map((row: CityDTO)=> new CityDTO(
        row.id,
        row.name,
        row.country,
        row.location,
        row.slug,
        row.parkings.map((parkingRow: ParkingDTO)=>new ParkingDTO(
            parkingRow.id,
            parkingRow.name,
            parkingRow.city_id,
            parkingRow.location,
            parkingRow.numberOfPlaces,
            parkingRow.hourlyRate
        ))

    ));

   
    const html1 = ReadAllCitiesView({cities});

    return c.html(html1);
}catch(err){
    console.error("Error in ServerController:", err);
        throw new HTTPException(500,{message: "Erreur serveur"} );
}

};
export default ReadAllCitiesController;
