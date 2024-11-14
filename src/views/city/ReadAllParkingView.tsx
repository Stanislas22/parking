import { cities } from "../../data/staticDatabase";
import City from "../../models/City";
import Layout from '../shared/Layout'
import { html } from "hono/html";
import { parkings} from "../../data/staticDatabase";
import Parking from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";
import React from "react";
type ReadAllParkingViewProps = {
    parkings : Array<Parking>
    

};

const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => (
    <ul>
        {parkings.map((parking) => (
            <li key={parking.id}>{parking.name} - {parking.numberOfSpots} spots</li>
        ))}
    </ul>
);

const ReadAllParkingView = ({parkings}: ReadAllParkingViewProps)=>
    <Layout pageTitle="List de parkings" heading="Parking disponible">
        <div>
         <h1>Les Parkings</h1>
            <ul>
                {parkings.map((parking) => (
                <li key={parking.id}>
                    <a href={`/parkings/${parking.id}`}>{parking.name}</a>
               
                </li>
                 ))}
            </ul>
            
    </div>
    <a href="/">Back to Home</a>
  </Layout>


export default ReadAllParkingView;
