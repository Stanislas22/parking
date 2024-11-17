import { cities } from "../../data/staticDatabase";
import City from "../../models/City";
import Layout from '../shared/Layout'
import { html } from "hono/html";
import { parkings} from "../../data/staticDatabase";
import Parking from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";
import { ParkingDTO } from "../../DTO/ParkingDTO";

type ReadAllParkingViewProps = {
    parkings : Array<ParkingDTO>
    

};

const ParkingList = ({ parkings }: { parkings: Array<ParkingDTO> }) => (
    <ul>
        {parkings.map((parking) => (
            <li key={parking.name}>
                <a href={`/parkings/${parking.name}`}>{parking.name} - {parking.numberOfPlaces}</a></li>
        ))}
    </ul>
);

const ReadAllParkingView = ({parkings}: ReadAllParkingViewProps)=>
    <Layout pageTitle="Liste de parkings" heading="Parking disponible">
        <div>
         <h1>Les Parkings</h1>
            <ul>
               <ParkingList parkings={parkings}/>
            </ul>
            
    </div>
    <a href="/">Back to Home</a>
  </Layout>


export default ReadAllParkingView;
