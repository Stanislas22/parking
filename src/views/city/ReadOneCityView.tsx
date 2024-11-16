import Layout from '../shared/Layout';
import City from "../../models/City"
import Parking from '../../models/Parking';
import React,{ReactNode}from 'react';
import { parkings } from '../../data/staticDatabase';


type ReadOneCityViewProps={
    city: City;
    parkings : Array<Parking>
}

const ReadOneCityView=({city}: ReadOneCityViewProps)=>
    
    
    <Layout pageTitle={`Détails de ${city.name}`} heading={city.name} >
        <div>
            <h1>Nom de la ville : {city.name}</h1>
            <p>Country :{city.country}</p>
            <p>Parkings : {city.parkingsIds.join("")}</p>
            <p>Location : {`Lat: ${city.location.latitude},Long: ${city.location.longitude}`}</p>
            
            <h2>Parkings en {city.name}</h2>
            <ul>
              {parkings.map((parking)=>(
                <li key={parking.id}>
                  <a href={`/parkings/${parking.id}`}>{parking.name}</a>  {parking.numberOfSpots} - {parking.hourlyRate}</li>
              ))}
            </ul>
            <a href="/cities">Retour aux villes</a>
        </div>

</Layout>


    
 

export default ReadOneCityView;