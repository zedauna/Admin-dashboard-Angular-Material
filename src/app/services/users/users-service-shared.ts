import {inject, Injectable, signal} from '@angular/core';
import {UsersService} from '@app/services/users/usersService';
import {emptyUsersJson, UsersJSON} from '@app/models/users.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceShared {

  private UsersService:UsersService=inject(UsersService);

  private usersSubject = new BehaviorSubject<UsersJSON>(emptyUsersJson);
  private _selectedUserId = signal<number | null>(null);
  private _usersJson = signal<UsersJSON>(emptyUsersJson)

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    this.UsersService.getUsersJson().subscribe(data => {
      this.usersSubject.next(data);
      this._usersJson.set(data);
    });
  }

  setSelectedUser(id: number) {
    this._selectedUserId.set(id);
  }

  usersJson = () => this._usersJson();
  selectedUserId = () => this._selectedUserId();

}
