import type { GPS } from "../types/GPS";

import  city from "../models/City";

import Parking from "../models/Parking";
import { toSlug } from "../utils/toSlug";

const ProvenceCoordonnée : GPS ={latitude: 43.533329,longitude:5.43333};
const SpeziaCoordonnée : GPS = {latitude: 44.238366,longitude:9.6912326};
const ChapelleCoordonnée : GPS = {latitude: 50.77635,longitude:6.083862};
const LagunaCoordonnée : GPS = {latitude:28.487180709838867,longitude:-16.313879013061523};
const newcastleCoordonnée : GPS = {latitude: 54.973847,longitude:-1.6131572};

const AixProvence = new city("Aix-en-Provence","France",ProvenceCoordonnée);
const LaSpezia = new city("La Spezia","Italie",SpeziaCoordonnée);
const AixChapelle = new city("Aix-la-Chapelle","Allemagne",ChapelleCoordonnée);
const Laguna = new city("San Cristobal de la laguna","Espagne",LagunaCoordonnée);
const Newcastle = new city("Newcatle","Angleterre",newcastleCoordonnée);


const parkingA = new Parking("Parking A",AixProvence.id,ProvenceCoordonnée,100,4.5);
const parkingB = new Parking("Parking B",LaSpezia.id,SpeziaCoordonnée,50,3);
const parkingC = new Parking("Parking C",LaSpezia.id,SpeziaCoordonnée,80,2.5);
const parkingD = new Parking("Parking D",AixChapelle.id,ChapelleCoordonnée,40,2.80);
const parkingE = new Parking("Parking E",Laguna.id,LagunaCoordonnée,70,3.10);
const parkingF = new Parking("Parking F",Newcastle.id,newcastleCoordonnée,60,2.40);
const parkingG = new Parking("Parking G",Newcastle.id,newcastleCoordonnée,90,3.20);

AixProvence.parkingsIds.push(parkingA.id);
LaSpezia.parkingsIds.push(parkingB.id,parkingC.id);
AixChapelle.parkingsIds.push(parkingD.id);
Laguna.parkingsIds.push(parkingE.id);
Newcastle.parkingsIds.push(parkingF.id,parkingG.id);



const cities : city[] = [AixProvence,LaSpezia,AixChapelle,Laguna,Newcastle];
 const parkings: Parking[]=[parkingA,parkingB,parkingC,parkingD,parkingE,parkingF,parkingG];

 export{cities,parkings};






