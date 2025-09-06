import {Component, computed, inject} from '@angular/core';
import {UsersServiceShared} from '../../services/users/users-service-shared';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-client-details',
  imports: [MatCardModule],
  templateUrl: './client-details.html',
  styleUrl: './client-details.scss'
})
export class ClientDetails {
  //data shared
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);

  users= computed(()=>{
    const users=this.UsersServiceShared.usersJson().users;
    const selectedId = this.UsersServiceShared.selectedUserId();
    return users.find(u => u.id === selectedId) ?? null;
  })

}
