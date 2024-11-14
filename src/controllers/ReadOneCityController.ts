import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import { toSlug } from "../utils/toSlug";
import ReadOneCityView from "../views/city/ReadOneCityView"
import { HTTPException } from 'hono/http-exception'
import City from "../models/City";
import React from "react";
import ReactDOMServer from 'react-dom/server'
import { db } from "../dataBase/initializeDatabase";
const ReadOneCityController =(c:Context)=>{
    const {slug} = c.req.param();
    
    const city = cities.find((city)=>toSlug(city.name)===slug);
    if(!city){
        throw new HTTPException(404);
    }
    
    const associateParkings = parkings.filter((parking)=>
      city.parkingsIds.includes(parking.id)
    );
    if(!associateParkings){
        throw new HTTPException(404);

    }
   
    const hml =ReadOneCityView({city, parkings});
    return c.html(" "+city.name+" "+city.country+" "+(city.location.latitude)+" "+(city.location.longitude) +" "+" "+city.parkingsIds+" "+city.slug
        
    );
 
};

export default ReadOneCityController;