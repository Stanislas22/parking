
import { Context } from 'hono'
import { html } from 'hono/html';

const HomeController= (c:Context)=>{
        return c.html(html`<!DOCTYPE html>

            <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Welcome to EuroPark</title>
            <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
            <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
            <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" /
          </head>
        <body>
            <h1>Welcome to EuroPark</h1>
            <img src="/static/parking.png" alt="" />
            <p>
              Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short
              or long duration in our car parks in Europe!
            </p>
            <nav>
            <ul>
              <li><a href="/cities">Our Cities</a></li>
              <li><a href="/parkings">Our Car Parks</a></li>
              </ul>
            </nav>
        </body>
            
            
            
            `)
        
    
}



export default HomeController;

