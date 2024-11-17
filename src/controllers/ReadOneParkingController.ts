import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { parkings } from "../data/staticDatabase";
import ReadOneParkingView from "../views/city/ReadOneParkingView"
import { db } from "../dataBase/initializeDatabase";
import { ParkingData } from "../types/ParkingData";
import Parking from "../models/Parking";
import { PrismaClient } from "@prisma/client";
import { ParkingDTO } from "../DTO/ParkingDTO";
const prisma = new PrismaClient();
const ReadOneParkingController =async (c:Context)=>{
    
    const parkingnom = c.req.param("id");
    try{
    const parkingData = await prisma.parking.findFirst({
        where:{name:parkingnom},
        
        });
        console.log("Parking data:", parkingData);
    if(!parkingData){
        throw new HTTPException(404,{message:` Parking avec l'ID "${parkingnom}" introuvable`});
    }
    const parking = new ParkingDTO(
        parkingData.id,
        parkingData.name,
        parkingData.city_id,
       parkingData.location,
        parkingData.numberOfPlaces,
        parkingData.hourlyRate
    );
    
    const hml1 = ReadOneParkingView({parking});
    return c.html(hml1);
} catch (error) {
    console.error("Error in serveController:", error);
    if(error instanceof HTTPException){
        throw error;
    } else{

    
    throw new HTTPException(500, {message:"Erreur serveur"});
    }
}
};

export default ReadOneParkingController;