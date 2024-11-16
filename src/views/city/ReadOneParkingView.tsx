import Layout from '../shared/Layout';
import City from "../../models/City"
import Parking from '../../models/Parking';
import React from 'react';

type ReadOneParkingViewProps={
    parking : Parking;
    
}

const ReadOneParkingView =( {parking }: ReadOneParkingViewProps)=>

    
    <Layout pageTitle={`Détails de ${parking.name}`} heading={parking.name} >
        <div>
            
            <h1>Détails de {parking.name}</h1>
            <p>{parking.id}</p>
            <p>{parking.city_id}</p>
            <p>Location :{`Latitude : ${parking.location.latitude},Longitude : ${parking.location.longitude}`}</p>
           <p>Number of Spot : {parking.numberOfSpots}</p>
           <p>Hourly Rate: {parking.hourlyRate}</p>
           <p>Opened : {parking.opened ? "Ouvert":"Fermé"}</p>
        <>
        </>
        
            
            <a href="/cities">Retour aux villes</a>
        </div>

</Layout>

    


export default ReadOneParkingView;