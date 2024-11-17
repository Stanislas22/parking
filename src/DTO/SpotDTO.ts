import { ParkDTO } from "./ParkDTO";

export class SpotDTO {
    id: number;
    parkingId: number;
    parks: ParkDTO[];
  
    constructor(id: number, parkingId: number, parks: ParkDTO[]) {
      this.id = id;
      this.parkingId = parkingId;
      this.parks = parks;
    }
  }