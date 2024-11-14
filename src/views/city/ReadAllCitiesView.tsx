import { cities } from "../../data/staticDatabase";
import City from "../../models/City";
import Layout from '../shared/Layout'
import { html } from "hono/html";
import { parkings} from "../../data/staticDatabase";
import Parking from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";
import React from "react";
type ReadAllCitiesViewProps = {
    cities : Array<City>;
    parkings : Array<City>
    

};
const CityLink = ({citys} : {citys : City})=>(
    <li>
        <a href={`/cities/${citys.slug}`}>{citys.name} - {citys.country}
        </a>
        {citys.parkingsIds.length>0}(
        <p>Nombre de parking : ${citys.parkingsIds.length}</p>
        ):(
            <p>Pas de parking disponible</p>
        )
    </li>
);
const CitiesList = ({cities}: {cities : Array<City>})=>(
    <ul>
       {cities.map(city=>(
        <CityLink key={city.id} citys={city}/>
       ))}
    </ul>
);
const ParkingList = ({ parkings }: { parkings: Array<City> }) => (
    <ul>
        {parkings.map((parking) => (
            <li key={parking.id}>{parking.name} - {parking.numberOfSpots} spots</li>
        ))}
    </ul>
);

const ReadAllCitiesView = ({cities,parkings}: ReadAllCitiesViewProps)=>
    <Layout pageTitle="Liste des Villes" heading="Ville disponible">
        <div>
         <h1>Liste des villes</h1>
         <CitiesList cities={parkings}/>
         <h2>Ville avec les parkings</h2>
         <CitiesList cities={parkings}/>
            <ul>
            {cities.map((city) => (
    <li key={city.id}>
        <a href={`/cities/${toSlug(city.name)}`}>{city.name} - {city.country}</a>
        <p>Nombre de parking : ${city.parkingsIds.length}</p>
        {city.parkingsIds && city.parkingsIds.length>0 &&(
        <>
        <h3>Parkings en {city.name}</h3>
        
        </>
        )}
    </li>
     ))}
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
//<ParkingList parkings={city.parkings}/>
export default ReadAllCitiesView;
