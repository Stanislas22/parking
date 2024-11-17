import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import { toSlug } from "../utils/toSlug";
import ReadOneCityView from "../views/city/ReadOneCityView"
import { HTTPException } from 'hono/http-exception'
import City from "../models/City";
import { PrismaClient } from "@prisma/client";
import { db } from "../dataBase/initializeDatabase";
import { html } from "hono/html";
import Parking from "../models/Parking";
import { CityDTO } from "../DTO/CityDTO";
import { ParkingDTO } from "../DTO/ParkingDTO";
const prisma = new PrismaClient();
const ReadOneCityController =async(c:Context)=>{
    const {slug} = c.req.param();
    try{
    const cityData = await prisma.city.findUnique({
        where:{slug},
        include: {parkings:true},
    });
    if(!cityData){
        throw new HTTPException(404,{message: `la ville avec le slug "${slug}" est introuvable.`});
    } 
    const city = new CityDTO(
        cityData.id,
        cityData.name,
        cityData.country,
        cityData.location,
        cityData.slug,
        cityData.parkings.map((parkingRow:ParkingDTO)=> new ParkingDTO(
            parkingRow.id,
            parkingRow.name,
            parkingRow.city_id,
            parkingRow.location,
            parkingRow.numberOfPlaces,
            parkingRow.hourlyRate
        ))
        
        );
       
    
    
   const hml =ReadOneCityView({city});
        return c.html(hml);
    }catch(error){
        console.error("Error:", error);
        if(error instanceof HTTPException){
            throw error;
        } else {
        throw new HTTPException(500,{message: " Erreur serveur"});
        }
    }
        
 
};

export default ReadOneCityController;