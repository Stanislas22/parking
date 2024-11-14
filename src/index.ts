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
import ReadOneCityController from './controllers/ReadOneCityController';
import ReadAllParkingsController from './controllers/ReadAllParkingsController';
import ReadOneParkingController from './controllers/ReadOneParkingController';
const app = new Hono()
const factory = createFactory();
app.route('/parkings',parkingRoutes);
app.route('/cities',CityRoutes);
app.use('/static/*',serveStatic({root:'./'}));
app.get('/',HomeController);

//app.get('/cities',ReadAllCitiesController);
//app.get('/cities/:slug',ReadOneCityController);
//app.get('/parkings',ReadAllParkingsController);
//app.get('/parkings/: id', ReadOneParkingController);
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


