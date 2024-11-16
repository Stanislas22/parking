import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { toSlug } from "../utils/toSlug";
import type { GPS } from "../types/GPS";
import Parking from "./Parking";

export  default class City{
    id : number;
    name:String;
    slug:String;
    parkingsIds : number[];
    country:String;
    location : GPS;
    numberOfSpots: any;
  parkings:Parking[]=[];
   
    
    
    constructor(name:String,country:String, location :GPS){
        this.id = generateRandomNumberId();
        this.name=name;
        this.slug = toSlug(name);
        this.country = country;
        this.location = location;
       //this.parkings =[];
        this.parkingsIds = [];
    }


    addParkingId(parking: Parking){
        this.parkings.push(parking);
       
    }
}