import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import ReadAllCitiesView from "../views/city/ReadAllCitiesView";
import { Database } from "sqlite";
import { db } from "../dataBase/initializeDatabase";


const ReadAllCitiesController = async(c:Context)=>{
    
    
    const citiesparkings = cities.filter(city=>city.parkingsIds.length>0);
    const html1 = ReadAllCitiesView({cities,parkings:citiesparkings});

    return c.html(html1);

};
console.log("ville: " , cities)
export default ReadAllCitiesController;
