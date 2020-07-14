export interface Car {
    id?: string;
    name: string;
    vin: string;
    make: string;
    model: string;
    year: string;
    fuelType: string;
    type: string;
    position: {
        lat: number;
        lon: number;
    };
    odometer: number;
    fuel: number;
    battery: number;
}
