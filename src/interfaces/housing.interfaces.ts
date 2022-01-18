export interface Housing {
  id: string;
  address: {
    formattedAddress: string;
    geolocation: {
      lat: number;
      lng: number;
    };
  };
  images: [string];
  price: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
  usableArea: number;
  publish: boolean;
}

export interface HousingFilters {
  filterPrice: string;
  filterBathrooms: string;
  filterBedrooms: string;
  filterParkingSpaces: string;
  filterUsableArea: string;
  filterFormattedAddress: string;
}
