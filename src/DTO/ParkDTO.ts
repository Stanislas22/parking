export class ParkDTO {
    id: string;
    startedAt: Date;
    endedAt: Date | null;
    vehicleNumberPlate: string;
    spotId: number;
    price: number;
  
    constructor(
      id: string,
      startedAt: Date,
      endedAt: Date | null,
      vehicleNumberPlate: string,
      spotId: number,
      price: number
    ) {
      this.id = id;
      this.startedAt = startedAt;
      this.endedAt = endedAt;
      this.vehicleNumberPlate = vehicleNumberPlate;
      this.spotId = spotId;
      this.price = price;
    }
  }