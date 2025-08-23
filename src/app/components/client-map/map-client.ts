import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,  OnInit,
} from '@angular/core';
import {UsersServiceShared} from '@app/services/users/users-service-shared';
import 'leaflet/dist/images/marker-shadow.png';
import * as L from 'leaflet';
import {LeafletService} from '@app/services/leaflet/leaflet-service';


@Component({
  selector: 'app-client-map',
  standalone: true,
  imports: [],
  templateUrl: './map-client.html',
  styleUrl: './map-client.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapClient implements OnInit{
  colorGender='';
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);
  private LeafletService: LeafletService=inject(LeafletService);

  //data shared
  usersJson=this.UsersServiceShared.usersJson;

  usersJsonComputed=computed(()=>{
    return this.usersJson();
  })

  // Calcul des markers : dépend de map et des users
  markers = computed(() => {
    const map = this.LeafletService.map_();
    const users = this.usersJsonComputed().users;

    if (!map) return [];

    map.eachLayer((layer: any) => {
      if (layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });

    return users.map(user => {
      if(user.gender==='male'){
        this.colorGender='#36A2EB';
      }else{
        this.colorGender='#FF6384';
      }
      const marker = L.circleMarker(
        [user.address.coordinates.lat,user.address.coordinates.lng],
        { radius: 8, color: this.colorGender }
      );
      marker.bindPopup(`<b>${user.address.city}</b>`);
      marker.addTo(map);
      return marker;
    });
  });


  ngOnInit(): void {
    const map = L.map('map').setView([48.8566, 2.3522], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    this.LeafletService.setMap(map);

    this.usersJsonComputed();
    this.markers();
  }


  constructor() {
    effect(() => {
      //console.log(this.markers());
    });
  }
}
