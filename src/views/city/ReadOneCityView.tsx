import Layout from '../shared/Layout';
import City from "../../models/City"
import Parking from '../../models/Parking';
import React,{ReactNode}from 'react';


type ReadOneCityViewProps={
    city: City;
    parkings : Array<Parking>
}

const ReadOneCityView=({city,parkings}: ReadOneCityViewProps)=>{
    
    <>
    <Layout pageTitle={`Détails de ${city.name}`} heading={city.name} >
        <div>
            <h1>{city.name}</h1>
            <p>Country :{city.country}</p>
            <p>Parkings : {city.parkingsIds.join("")}</p>
            <p>Location : {`Lat: ${city.location.latitude},Long: ${city.location.longitude}`}</p>
            {parkings && parkings.length > 0 ? (
        <>
          <h3>Parkings disponible à  {city.name}</h3>
          <ul>
            {parkings.map((parking) => (
              <li key={parking.id}>
                {parking.name} - {parking.numberOfSpots} spots - {parking.hourlyRate}€/h
                {parking.location}
              </li>
            ))}
          </ul>
        </>
            ):(
                <p>pas de parking disponible</p>
            )}
            <a href="/cities">Retour aux villes</a>
        </div>

</Layout>
</>

    
  }  ;

export default ReadOneCityView;