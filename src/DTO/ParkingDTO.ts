export class ParkingDTO {
    opened: any;
    constructor(
        public id : number,
        public name: String,
        public city_id: number,
        public location: String,
        public numberOfPlaces: number,
        public hourlyRate: number
    ) {}
}