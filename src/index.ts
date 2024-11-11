import { Hono } from 'hono'
import {createFactory} from 'hono/factory'
import parkingRoutes from './routes/parkingRoutes'
import { logger } from "hono/logger";
import CityRoutes from './routes/cityRoutes'
import HomeController from './controllers/HomeController';
const app = new Hono()
const factory = createFactory();
app.route('/parkings',parkingRoutes);
app.route('/cities',CityRoutes);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/',HomeController.getHome);
const middleware = factory.createMiddleware(async (c,next)=>{
  c.set('foo','bar');
  await  next();
});

const handlers = factory.createHandlers(logger(),middleware,(c)=>{
  const fooValue = c.get('foo');
  return c.json({foo:fooValue});
});
 handlers;


export default app
