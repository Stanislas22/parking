import { toSlug } from "../utils/toSlug";
import { GPS } from "./GPS";

export class CityData{
    id: number;
    name: String;
    slug: String;
    country: String;
    location: GPS; 
    parkingsIds : number[];

    constructor({id,name,country,location,parkingsIds=[]}:{id : number,name : String,country: String,location : GPS,parkingsIds: number[]}) {
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.country = country;
        this.location = location;
        this.parkingsIds = parkingsIds;
    }
    
}