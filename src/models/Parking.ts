import Spot from "./Spot";
import type { GPS } from "../types/GPS";

import { generateRandomNumberId } from "../utils/generateRandomNumberId";


export default class Parking{
    id : number;
    name: String;
    city_id:number;
    location:GPS;
    numberOfSpots : number;
    opened:boolean;
    hourlyRate:number;
    parkIds: number[];
    spot : Spot[];
    

    constructor(name:String,city_id:number,location:GPS,numberOfSpots:number,hourlyRate:number){
        this.id = generateRandomNumberId();
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.opened = true;
        this.numberOfSpots = numberOfSpots;
        this.hourlyRate = hourlyRate;
        this.parkIds = [];
        this.spot = [];
        
        this.generateSpots();
    }

    addSpotId(spotId:number):number{
        this.parkIds.push(spotId);
        return spotId;
    }

    
    private generateSpots(): void{
        for(let i =0; i< this.numberOfSpots;i++){
            const spots = new Spot(this.id);
            this.spot.push(spots);
            this.parkIds.push(spots.id);

        }
    }
}