import * as L from 'leaflet';

export const iconRetinaUrl = './leaflet/marker-icon-2x.png';
export const iconUrl = 'leaflet/marker-icon.png';
export const shadowUrl = 'leaflet/marker-shadow.png';

export const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

export const iconUsers = L.icon({
  iconUrl,
  shadowUrl,
  popupAnchor: [13, 0],
});

export enum ColorType{
  MALE ="#0000ff",
  FEMELLE="#ffc0cb"
}