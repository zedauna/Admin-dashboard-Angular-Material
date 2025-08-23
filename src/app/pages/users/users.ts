import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Tablefilter } from '@app/components/client-tablefilter/tablefilter';
import { PieClientGender } from '@app/components/client-gender-pie/pie-client-gender';
import { MapClient } from '@app/components/client-map/map-client';
import {InfoCard} from '@app/components/info-card/info-card';

@Component({
  selector: 'app-users',
  standalone:true,
  imports: [MatCardModule,Tablefilter,PieClientGender,MapClient,InfoCard],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Users  {
}
