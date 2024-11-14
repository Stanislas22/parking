import { Context } from "hono";
import { cities, parkings } from "../data/staticDatabase";
import ReadAllCitiesView from "../views/city/ReadAllCitiesView";
const ReadAllCitiesController = (c:Context)=>{
    const citiesparkings = cities.filter(city=>city.parkingsIds.length>0);
    const html1 = ReadAllCitiesView({cities:cities,parkings:citiesparkings});

    return c.html(html1);

};
console.log("ville: " , cities)
export default ReadAllCitiesController;
