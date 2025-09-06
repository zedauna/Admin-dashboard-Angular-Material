import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { sidenavHeaderService } from '../../services/sidenav/sidenav-header.js';
import {Router, RouterLink} from '@angular/router';
import {LoginService} from '../../services/login/login-service';

@Component({
  selector: 'app-UI-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private sidenavHeaderService: sidenavHeaderService=inject(sidenavHeaderService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  sideBarButtonClick() {
    this.sidenavHeaderService.toggle();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
