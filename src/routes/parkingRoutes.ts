import { Hono } from "hono";
import ReadAllParkingsController from "../controllers/ReadAllParkingsController";
import ReadOneParkingController from "../controllers/ReadOneParkingController";

const parkingRoutes = new Hono();
parkingRoutes.get("/", ReadAllParkingsController);
parkingRoutes.get("/:id", ReadOneParkingController);

/*parkingRoutes.get('/',(c)=>c.text("List Parking"));
parkingRoutes.get('/:id',(c)=>{
    const id = c.req.param('id');
    return c.text("Get parking : " + id);
});

parkingRoutes.post('/',(c)=>c.text("Create parking"));
*/
export default parkingRoutes;

