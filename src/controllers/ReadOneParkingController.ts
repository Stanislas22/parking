import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { parkings } from "../data/staticDatabase";
import ReadOneParkingView from "../views/city/ReadOneParkingView"
import { db } from "../dataBase/initializeDatabase";
import { ParkingData } from "../types/ParkingData";
import Parking from "../models/Parking";

const ReadOneParkingController =async (c:Context)=>{

    const id = c.req.param("id");
    try{
    const parkingData = await db.prepare("SELECT * FROM parkings WHERE id = ?").get(id) as ParkingData;
    
    //const parking = parkings.find((parking)=>parking.id===parseInt(id));
    if(!parkingData){
        throw new HTTPException(404,{message:` Parking avec l'ID "${id}" introuvable`});
    }
    const parking = new Parking(
        parkingData.name,
        parkingData.city_id,
        parkingData.location,
        parkingData.numberOfSpots,
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