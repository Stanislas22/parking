import { cities } from "../../data/staticDatabase";
import City from "../../models/City";


const ReadAllCitiesView = (cities: {name:String; country :String}[])=>{
    const citiesList = cities.map((city)=>{
        return `<li>${city.name} - (${city.country})</li>`;

    }).join('');


    return `
    <html>
      <head><title>Our Cities</title></head>
      <body>
        <h1>Our Cities</h1>
        <ul>
          ${citiesList}
        </ul>
      </body>
    </html>
  `;
}

export default ReadAllCitiesView;