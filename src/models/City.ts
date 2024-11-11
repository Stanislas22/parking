import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { toSlug } from "../utils/toSlug";
import type { GPS } from "../types/GPS";

export  default class City{
    id : number;
    name:String;
    slug:String;
    parkingsIds : number[];
    country:String;
    location : GPS;
    
    
    constructor(name:String,country:String, location :GPS){
        this.id = generateRandomNumberId();
        this.name=name;
        this.slug = toSlug(name);
        this.country = country;
        this.location = location;
        this.parkingsIds = [];
    }


    addParkingId(parkingId: number): number{
        this.parkingsIds.push(parkingId);
        return parkingId;
    }
}