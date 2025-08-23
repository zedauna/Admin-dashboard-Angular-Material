import {Component, computed, inject} from '@angular/core';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Credentials, LoginService} from '@app/services/login/login-service';
import {Router} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private loginService = inject(LoginService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  loginFormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  message: string = 'Vous êtes déconnecté. (itachi/ulchia)';
  invalidCredentials = false;

  stateloggedIn=computed(()=>{
    return !this.loginService.isLoggedIn()
  });

  setMessage() {
    this.message = this.loginService.isLoggedIn()
      ? 'Vous êtes connecté.'
      : 'Identifiant ou mot de passe incorrect.';
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    if(this.loginService.login(this.loginFormGroup.value as Credentials)){
      this.setMessage();
      if (this.loginService.isLoggedIn()) {
        let redirect = this.loginService.redirectUrl
          ? this.loginService.redirectUrl
          : '/home';
        this.router.navigate([redirect]);
      } else {
        this.setMessage();
        this.loginFormGroup.reset();
        this.invalidCredentials = true;
        console.error("Handle authentication error (show error message, etc.)");
      }
    };
  }

  logout() {
    this.loginService.logout();
    this.message=''

    this.loginFormGroup.reset();
    window.location.reload();
  }


}
