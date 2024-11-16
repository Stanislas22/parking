import { Context } from "hono";
import {parkings } from "../data/staticDatabase";
import ReadAllParkingView from "../views/city/ReadAllParkingView"
import { db } from "../dataBase/initializeDatabase";
import Parking from "../models/Parking";
import { ParkingData } from "../types/ParkingData";
import { HTTPException } from "hono/http-exception";
const ReadAllParkingsController = async(c:Context)=>{
    try{
    const parkingsData = await db.prepare("SELECT * FROM parkings").all() as ParkingData[];
    const parkings = parkingsData.map((row: ParkingData) => new Parking(
        row.name,
        row.city_id,
        row.location,
        row.numberOfSpots,
        row.hourlyRate
    ));
    const html2 = ReadAllParkingView({parkings});
    ;
    return c.html(html2);
} catch (error) {
    console.error("Error in ServerController:", error);
    throw new HTTPException(500, {message:"Erreur serveur"});
}

};
//console.log("parkings: " , parkings)
export default ReadAllParkingsController;
