import { Context } from "hono";
import {parkings } from "../data/staticDatabase";
import ReadAllParkingView from "../views/city/ReadAllParkingView"
import { db } from "../dataBase/initializeDatabase";
const ReadAllParkingsController = async(c:Context)=>{
    

    const html2 = ReadAllParkingView({parkings});

    return c.html(html2);

};
console.log("parkings: " , parkings)
export default ReadAllParkingsController;
