import { Hono } from "hono";

const CityRoutes = new Hono();
CityRoutes.get('/',(c)=>c.text("List de villes"));
CityRoutes.get('/:id',(c)=>{
    const id = c.req.param('id');
    return c.text("Get ville : " + id);
});

CityRoutes.post('/',(c)=>c.text("Create ville"));
export default CityRoutes;
