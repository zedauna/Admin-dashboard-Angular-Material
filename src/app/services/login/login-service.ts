import {Injectable, signal, WritableSignal} from '@angular/core';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:WritableSignal<boolean> = signal(false);
  private authSecretKey = 'Itachi Ulchia';
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA';
  redirectUrl: string="";

  login(LoginCredentials:Credentials): boolean {
    if(LoginCredentials.username === "itachi" && LoginCredentials.password === "ulchia"){
      localStorage.setItem(this.authSecretKey, this.authToken);
      this.isLoggedIn.set(true);
      return true;
    }else{
      return false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isLoggedIn();
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isLoggedIn.set(false);
  }

  constructor() {
    this.isLoggedIn.set(!!localStorage.getItem(this.authSecretKey));
  }

}
