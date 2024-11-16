import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import { toSlug } from "../utils/toSlug";
import ReadOneCityView from "../views/city/ReadOneCityView"
import { HTTPException } from 'hono/http-exception'
import City from "../models/City";
import React from "react";
import ReactDOMServer from 'react-dom/server'
import { db } from "../dataBase/initializeDatabase";
import { html } from "hono/html";
import Parking from "../models/Parking";
const ReadOneCityController =(c:Context)=>{
    const {slug} = c.req.param();
   
    const city = cities.find((city)=>toSlug(city.name)===slug);
    if(!city){
        throw new HTTPException(404);
    } 
   
        
   const associateParkings = parkings.filter((parking)=>parking.city_id===city.id
    );
    if(!associateParkings){
        throw new HTTPException(404);

    }
    
    
   const hml =ReadOneCityView({city,parkings:associateParkings});
        return c.html(hml);
        
 
};

export default ReadOneCityController;