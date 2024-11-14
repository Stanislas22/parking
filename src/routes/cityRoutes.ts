import { Hono } from "hono";
import ReadAllCitiesController from "../controllers/ReadAllCitiesController";
import ReadOneCityController from "../controllers/ReadOneCityController";

const CityRoutes = new Hono();

CityRoutes.get("/", ReadAllCitiesController);
CityRoutes.get("/:slug", ReadOneCityController);
/*CityRoutes.get('/',(c)=>c.text("List de villes"));
CityRoutes.get('/:id',(c)=>{
    const id = c.req.param('id');
    return c.text("Get ville : " + id);
});

CityRoutes.post('/',(c)=>c.text("Create ville"));*/
export default CityRoutes;
