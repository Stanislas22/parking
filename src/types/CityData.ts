import Parking from "../models/Parking";
import { toSlug } from "../utils/toSlug";
import { GPS } from "./GPS";
import { ParkingData } from "./ParkingData";

export class CityData{
    id: number;
    name: String;
    slug: String;
    country: String;
    location: GPS; 
    parkingsIds : number[];
    parkings : ParkingData[];

    constructor({id,name,country,location,parkingsIds=[],parkings = []}:{id : number;name : String;country: String;location : GPS;parkingsIds: number[];parkings:ParkingData[]}) {
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.country = country;
        this.location = location;
        this.parkingsIds = parkingsIds;
        this.parkings=parkings;
    }
    
}