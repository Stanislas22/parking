import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import ReadAllCitiesView from "../views/city/ReadAllCitiesView";
import { Database } from "sqlite";
import { db } from "../dataBase/initializeDatabase";
import City from "../models/City";
import Parking from "../models/Parking";
import { CityData } from "../types/CityData";
import { ParkingData } from "../types/ParkingData";
import { HTTPException } from "hono/http-exception";


const ReadAllCitiesController = async(c:Context)=>{
    try{
    const citiesData = await db.prepare("SELECT * FROM cities").all() as CityData[];
    const cities = citiesData.map((row:CityData)=> new City(
        row.name,
        row.country,
        row.location

    ));

    const parkingsData =await db.prepare("SELECT * FROM parkings").all() as ParkingData[];
    const parkings = parkingsData.map((row:ParkingData)=>new Parking(
        row.name,
        row.city_id,
        row.location,
        row.numberOfSpots,
        row.hourlyRate
       
    ));
    cities.forEach(city => {
        city.parkings = parkings.filter(parking => city.parkingsIds.includes(parking.city_id));
    });
   
   //const citiesparkings = cities.filter(city=>city.parkingsIds.length>0);
    const html1 = ReadAllCitiesView({cities,parkings:cities});

    return c.html(html1);
}catch(err){
    console.error("Error in ServerController:", err);
        throw new HTTPException(500,{message: "Erreur serveur"} );
}

};
//console.log("ville: " , cities)
export default ReadAllCitiesController;
