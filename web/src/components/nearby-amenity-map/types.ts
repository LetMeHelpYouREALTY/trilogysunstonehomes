export type MapPlaceResult = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address?: string;
  googleMapsUri?: string;
};

export const MAP_CONTAINER_MIN_HEIGHT = 420;
