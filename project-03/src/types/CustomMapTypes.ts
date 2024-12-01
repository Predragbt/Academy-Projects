export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  coordinates: Coordinates;
}

export interface FooterMapLocations {
  eng: Location;
  mk: Location;
}
