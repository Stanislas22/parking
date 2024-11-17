import { Context } from "hono";
import {parkings } from "../data/staticDatabase";
import ReadAllParkingView from "../views/city/ReadAllParkingView"
import { db } from "../dataBase/initializeDatabase";
import Parking from "../models/Parking";
import { ParkingData } from "../types/ParkingData";
import { HTTPException } from "hono/http-exception";
import { PrismaClient } from "@prisma/client";
import { ParkingDTO } from "../DTO/ParkingDTO";
const prisma = new PrismaClient();
const ReadAllParkingsController = async(c:Context)=>{
    try{
    const parkingsData = await prisma.parking.findMany();
    const parkings = parkingsData.map((row: ParkingDTO ) => new ParkingDTO(
        row.id,
        row.name,
        row.city_id,
        row.location,
        row.numberOfPlaces,
        row.hourlyRate
    ));
    const html2 = ReadAllParkingView({parkings});
    
    return c.html(html2);
} catch (error) {
    console.error("Error in ServerController:", error);
    throw new HTTPException(500, {message:"Erreur serveur"});
}

};
export default ReadAllParkingsController;
