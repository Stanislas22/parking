import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import {v4 as uuidv4} from "uuid";


export  default class Park{

    id:String;
    spot_id:number;
    startedAt:Date;
    endedAt:Date;
    price:number;
    paid:boolean;


    constructor(spot_id:number,startedAt:Date,endedAt:Date,price:number,paid:boolean){
        this.id = uuidv4();
        this.spot_id = spot_id;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }

    endParking(endedAt:Date) : Date{
        this.endedAt = endedAt;
        return endedAt;
    }

    pay() : boolean{
        this.paid = true;
        return true;
    }

}