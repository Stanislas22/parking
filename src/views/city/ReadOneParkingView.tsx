import Layout from '../shared/Layout';
import City from "../../models/City"
import Parking from '../../models/Parking';
import React from 'react';
import { ParkingDTO } from '../../DTO/ParkingDTO';

type ReadOneParkingViewProps={
    parking : ParkingDTO;
    
}

const ReadOneParkingView =( {parking }: ReadOneParkingViewProps)=>

    
    <Layout pageTitle={`Détails de ${parking.name}`} heading="" >
        <div>
            
            <h1>Voici les détails du {parking.name}</h1>
            <ol>
             <p>ID de la ville : {parking.city_id}</p>
             <p>Coordonées :{parking.location}</p>
             <p>Nombre de places : {parking.numberOfPlaces}</p>
             <p>Taux horraire: {parking.hourlyRate}€</p>
             <p>Opened : {parking.opened ? "Ouvert":"Fermé"}</p>
            </ol>
        <>
        </>
        
            <ol>
            <a href="/cities">Retour aux villes</a>
            <br></br>
            <a href="/parkings">Retour aux Parkings</a>
            </ol>
        </div>

</Layout>

    


export default ReadOneParkingView;