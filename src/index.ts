import { Hono } from 'hono'
import {createFactory} from 'hono/factory'
import parkingRoutes from './routes/parkingRoutes'
import { logger } from "hono/logger";
import CityRoutes from './routes/cityRoutes'
import HomeController from './controllers/HomeController';
import {serveStatic} from 'hono/bun'
import { cities,parkings } from './data/staticDatabase';
import { html } from 'hono/html';
import ReadAllCitiesController from './controllers/ReadAllCitiesController';
import {ReadAllCitiesView} from './views/city/ReadAllCitiesView';
const app = new Hono()
const factory = createFactory();
app.route('/parkings',parkingRoutes);
app.route('/cities',CityRoutes);
app.use('/static/*',serveStatic({root:'./'}));
app.get('/',HomeController);
app.get('/cities',(c)=>{
  return c.html(html`
      <h2>Our cities</h2>
      <ul>
      ${cities.map(citys=>html`<li>${citys.name} - ${citys.country}</li>`)}
      </ul>
      `)
});
app.get('cities',(c)=>{
  const html1 = ReadAllCitiesView(cities);
  return c.html(html1);
})
app.get('cities',ReadAllCitiesController);
app.get('/parkings',(c)=>{
  return c.html(html`
      <h2>Our Parking</h2>
      <ul>
      ${parkings.map(parking=>html`<li>${parking.name} - ${parking.numberOfSpots} spots -${parking.hourlyRate}</li>`)}
  
      </ul>
      `)
});
const middleware = factory.createMiddleware(async (c,next)=>{
  c.set('foo','bar');
  await  next();
});

const handlers = factory.createHandlers(logger(),middleware,(c)=>{
  const fooValue = c.get('foo');
  return c.json({foo:fooValue});
});
 handlers;


export default app;


