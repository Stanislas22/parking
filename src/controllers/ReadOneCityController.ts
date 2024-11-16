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
import { ParkingData } from "../types/ParkingData";
import { CityData } from "../types/CityData";
const prisma = new PrismaClient();
const ReadOneCityController =async(c:Context)=>{
    const {slug} = c.req.param();
    try{
    const cityData = await prisma.city.findUnique({
        where:{slug},
        include: {parkings:true},
    });
        //db.prepare("SELECT * FROM cities WHERE slug = ?").get(slug) as CityData|undefined;
    //const city = cities.find((city)=>toSlug(city.name)===slug);
    if(!cityData){
        throw new HTTPException(404,{message: `la ville avec le slug "${slug}" est introuvable.`});
    } 
    const city = new City(
        cityData.name,
        cityData.country,
        JSON.parse(cityData.location),
        
        );
       /* const parkingsData = await db.prepare("SELECT * FROM parkings WHERE city_id = ?").all(cityData.id) as ParkingData[];
        if (!parkingsData || parkingsData.length === 0) {
            throw new HTTPException(404,{message: `Aucun parking trouvé pour la ville "${cityData.name}".`});
        }*/
        const associateParkings = cityData.parkings.map((row) => new Parking(
             row.name,
            row.city_id,
            JSON.parse(row.location),
            row.numberOfSpots,
            row.hourlyRate,
        ));
   /*const associateParkings = parkings.filter((parking)=>parking.city_id===city.id
    );
    if(!associateParkings){
        throw new HTTPException(404);

    }*/
    
    
   const hml =ReadOneCityView({city:city,parkings:associateParkings});
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