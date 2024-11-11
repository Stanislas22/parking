import { Hono } from 'hono'
import { toSlug } from './utils/toSlug'
const app = new Hono()



app.get('/', (c) => {
  return c.text('Hello Hono!')
})



export default app
