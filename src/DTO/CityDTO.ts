import { ParkingDTO } from "./ParkingDTO";

export class CityDTO {
    constructor(
        public id :number,
        public name: String,
        public country: String,
        public location: String,
        public slug: String,
        public parkings: ParkingDTO[]
    ) {}
}