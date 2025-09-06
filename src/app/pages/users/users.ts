import {ChangeDetectionStrategy, Component, computed, effect, inject, model} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {PieClientGender} from '../../components/client-gender-pie/pie-client-gender';
import {Tablefilter} from '../../components/client-tablefilter/tablefilter';
import {InfoCard} from '../../components/info-card/info-card';
import {UsersServiceShared} from '../../services/users/users-service-shared';


@Component({
  selector: 'app-users',
  standalone:true,
  imports: [MatCardModule,Tablefilter,PieClientGender,InfoCard],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Users  {

  //data shared
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);

  usersJson= computed(()=>{
    return this.UsersServiceShared.usersJson();
  });

  total=computed(()=>{
    return this.usersJson().total
  });
  limit=computed(()=>{
    return this.usersJson().limit
  });
  skip=computed(()=>{
    return this.usersJson().skip
  });

  constructor(){
    effect(() => {
      //console.home-table(this.UsersServiceShared.usersJson());
    });
  }
}
