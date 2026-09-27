export type MapPlaceResult = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address?: string;
  rating?: number;
  googleMapsUri?: string;
};

export type GoogleMapsWindow = Window & {
  google?: {
    maps: {
      importLibrary: (name: string) => Promise<unknown>;
      Map: new (
        el: HTMLElement,
        opts: { center: { lat: number; lng: number }; zoom: number; mapId?: string },
      ) => GoogleMapInstance;
      InfoWindow: new (opts?: { content?: string }) => GoogleInfoWindow;
      Marker: new (opts: GoogleMarkerOptions) => GoogleMarker;
      LatLng: new (lat: number, lng: number) => { lat: () => number; lng: () => number };
      LatLngBounds: new () => GoogleLatLngBounds;
      event: { clearInstanceListeners: (instance: unknown) => void };
    };
  };
};

export type GoogleMapInstance = {
  setCenter: (c: { lat: number; lng: number }) => void;
  fitBounds: (b: GoogleLatLngBounds) => void;
};

export type GoogleInfoWindow = {
  open: (map: GoogleMapInstance, marker: GoogleMarker) => void;
  close: () => void;
  setContent?: (html: string) => void;
};

export type GoogleMarker = {
  setMap: (map: GoogleMapInstance | null) => void;
  addListener: (event: string, handler: () => void) => void;
};

export type GoogleMarkerOptions = {
  map?: GoogleMapInstance;
  position: { lat: number; lng: number };
  title?: string;
  icon?: { url: string; scaledSize?: { width: number; height: number } };
};

export type GoogleLatLngBounds = {
  extend: (point: { lat: number; lng: number }) => void;
};

export const MAP_CONTAINER_MIN_HEIGHT = 420;

export const GOOGLE_MAPS_SCRIPT_BASE = "https://maps.googleapis.com/maps/api/js";
