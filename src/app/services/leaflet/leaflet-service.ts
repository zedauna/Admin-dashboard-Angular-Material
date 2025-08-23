import {Injectable, signal} from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  private _map = signal<L.Map | null>(null);

  /**
   * pour sauvergarder l'instance MAP
   * @param map
   */
  setMap(map: L.Map) {
    this._map.set(map);
  }

  map_ = () => this._map();

}
