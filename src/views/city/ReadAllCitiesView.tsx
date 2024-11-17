import { cities } from "../../data/staticDatabase";
import City from "../../models/City";
import Layout from '../shared/Layout'
import { html } from "hono/html";
import { parkings} from "../../data/staticDatabase";
import Parking from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";
import React from "react";
import { CityDTO } from "../../DTO/CityDTO";
import { ParkingDTO } from "../../DTO/ParkingDTO";
type ReadAllCitiesViewProps = {
    cities : Array<CityDTO>;
    //parkings : Array<CityDTO>
    

};
const CityLink = ({citys} : {citys : CityDTO})=>(
    <li>
        <a href={`/cities/${citys.slug}`}>{citys.name} - {citys.country}
        </a>
        
    </li>
);
const CitiesList = ({cities}: {cities : Array<CityDTO>})=>(
    <ul>
       {cities.map(city=>(
        <CityLink citys={city}/>
       ))}
    </ul>
);
const ParkingList = ({ parkings }: { parkings: Array<ParkingDTO> }) => (
    <ul>
        {parkings.map((parking) => (
            <li key={parking.name}>{parking.name} - {parking.numberOfPlaces} spots</li>
        ))}
    </ul>
);

const ReadAllCitiesView = ({cities}: ReadAllCitiesViewProps)=>
    <Layout pageTitle="Liste des Villes" heading="Ville disponible">
        <div>
         <h1>Liste des villes</h1>
         <CitiesList cities={cities}/>
         <ul>
            
                    
         </ul>
         
        
       
            
    </div>
    <a href="/">Back to Home</a>
  </Layout>


/*{cities.map((city) => (
    <li key={city.id}>
        <a href={`/cities/${toSlug(city.name)}`}>{city.name} - {city.country}</a>
        <p>Nombre de parking : ${city.parkingsIds.length}</p>
        {city.parkingsIds && city.parkingsIds.length>0 &&(
        <>
        <h3>Parkings en {city.name}</h3>
        
        </>
        )}
    </li>
     ))}*/
    /*{citys.parkingsIds.length>0}(
        <p>Nombre de parking : ${citys.parkingsIds.length}</p>
        )*/
//<ParkingList parkings={city.parkings}/>
export default ReadAllCitiesView;
