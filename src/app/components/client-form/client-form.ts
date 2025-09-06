import {Component, computed, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {UsersServiceShared} from '../../services/users/users-service-shared';

@Component({
  selector: 'app-client-form',
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './client-form.html',
  styleUrl: './client-form.scss'
})
export class ClientForm {
  private fb = inject(FormBuilder);
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);

  selectedUser = computed(() => {
    const users = this.UsersServiceShared.usersJson().users;
    const selectedId = this.UsersServiceShared.selectedUserId();
    return users.find(u => u.id === selectedId) ?? null;
  });

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Ici on pourrait faire un POST/PUT HTTP vers l'API
    }
  }

  constructor() {
    const u = this.selectedUser();
    if (u) {
      this.form.patchValue(u);
    }
  }

}
