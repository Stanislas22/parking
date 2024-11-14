import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { parkings } from "../data/staticDatabase";
import ReadOneParkingView from "../views/city/ReadOneParkingView"

const ReadOneParkingController =(c:Context)=>{
    const id = c.req.param("id");
    const parking = parkings.find((parking)=>parking.id===parseInt(id));
    if(!parking){
        throw new HTTPException(404);
    }
    
    
    const hml1 = ReadOneParkingView({parking});
    return c.html(hml1);
};

export default ReadOneParkingController;