import Spot from "../models/Spot";
import { GPS } from "./GPS";

export class ParkingData{
    id: number;
    name: String;
    city_id: number;
    location: GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parkIds: number[];
    spot : Spot[];
    constructor({id,name,city_id,location,numberOfSpots,opened,hourlyRate,parkIds}:{id :number;name:String;city_id:number;location:GPS;numberOfSpots :number;opened :boolean;hourlyRate:number;parkIds :number[];spot :Spot[]}) {
        this.id=id;
        this.name = name;
        this.city_id =city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened =opened;
        this.hourlyRate = hourlyRate;
        this.parkIds =parkIds;
        this.spot = [];
}
}