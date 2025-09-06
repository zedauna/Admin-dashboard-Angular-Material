import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {PieClientGender} from '../../components/client-gender-pie/pie-client-gender';
import {Tablefilter} from '../../components/client-tablefilter/tablefilter';
import {InfoCard} from '../../components/info-card/info-card';


@Component({
  selector: 'app-users',
  standalone:true,
  imports: [MatCardModule,Tablefilter,PieClientGender,InfoCard],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Users  {
}
