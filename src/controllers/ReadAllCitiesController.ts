import { Context } from "hono";
import { cities } from "../data/staticDatabase";
import {ReadAllCitiesView} from "../views/city/ReadAllCitiesView";
const ReadAllCitiesController = (c:Context)=>{
    const html1 = ReadAllCitiesView(cities);

    return c.html(html1);

};
export default ReadAllCitiesController;
