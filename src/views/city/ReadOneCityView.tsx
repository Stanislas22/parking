import Layout from '../shared/Layout';
import City from "../../models/City"
import Parking from '../../models/Parking';
import React,{ReactNode}from 'react';
import { parkings } from '../../data/staticDatabase';
import { CityDTO } from '../../DTO/CityDTO';
import { ParkingDTO } from '../../DTO/ParkingDTO';


type ReadOneCityViewProps={
    city: CityDTO;
    //parkings : Array<ParkingDTO>
}

const ReadOneCityView=({city}: ReadOneCityViewProps)=>
    
    
    <Layout pageTitle={`Détails de ${city.name}`} heading="" >
        <div>
            <h1>Nom de la ville : {city.name}</h1>
            <ul>
            <ol>
              <p>Country :{city.country}</p>
              <p>Location :{city.location}</p>
              <p>Slug : {city.slug}</p>
            </ol>
            </ul>
            <h2>Parkings en {city.name}</h2>
            <ul>
              <ol>
              {city.parkings.map((parking)=>(
                  <li key={parking.id}>
                  {parking.name}-{parking.numberOfPlaces} places - {parking.hourlyRate}€
                 
                  </li>
              ))}
              </ol>
            </ul>
            <a href="/cities">Retour aux villes</a>
        </div>

</Layout>


    
 

export default ReadOneCityView;