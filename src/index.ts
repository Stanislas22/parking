import { Hono } from 'hono'
import {createFactory} from 'hono/factory'
import parkingRoutes from './routes/parkingRoutes'
import { logger } from "hono/logger";
import CityRoutes from './routes/cityRoutes'
import HomeController from './controllers/HomeController';
import {serveStatic} from 'hono/bun';
import { db } from './dataBase/initializeDatabase';
import { cities,parkings } from './data/staticDatabase';
import { html } from 'hono/html';
import ReadAllCitiesController from './controllers/ReadAllCitiesController';
import ReadOneCityController from './controllers/ReadOneCityController';
import ReadAllParkingsController from './controllers/ReadAllParkingsController';
import ReadOneParkingController from './controllers/ReadOneParkingController';
import { appendTrailingSlash,trimTrailingSlash } from 'hono/trailing-slash';
import { HTTPException } from 'hono/http-exception';
const app = new Hono()
const factory = createFactory();
app.route('/parkings',parkingRoutes);
app.route('/cities',CityRoutes);
app.use('/static/*',serveStatic({root:'./'}));
app.get('/',HomeController);
app.use('/parkings/*',appendTrailingSlash());
app.get("/parkings/*",(c)=>c.text("With Trailing Slash"));
app.use('/cities/*',trimTrailingSlash());
app.get("/cities/*",(c)=>c.text("Without Trailing Slash"));
app.onError((err,c)=>{
  if (err instanceof HTTPException){
    const statusCode = err.status;
    if(statusCode===404){
      return c.html("Erreur du lié au serveur/ Veuillez réessayer plus tard",404);
    }
    if(statusCode===500){
      return c.html("Désolé accès impossible/ Veuillez réessayer plus tard",500);

    }
  }
  return c.html("/ Veuillez réessayer plus tard");
  
})

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


