import {ChangeDetectionStrategy, Component, computed, effect, inject, model} from '@angular/core';
import {UsersServiceShared} from '@app/services/users/users-service-shared';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [MatCardModule,MatIcon],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCard {
  //data shared
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);

  usersJson= computed(()=>{
    return this.UsersServiceShared.usersJson();
  });

  total=model(this.usersJson().total);
  limit=model(this.usersJson().limit);
  skip=model(this.usersJson().skip);

  constructor(){
    effect(() => {
      //console.home-table(this.UsersServiceShared.usersJson());
    });
  }

}
