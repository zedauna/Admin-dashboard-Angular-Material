import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { sidenavHeaderService } from '../../services/sidenav/sidenav-header.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-UI-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
private sidenavHeaderService: sidenavHeaderService=inject(sidenavHeaderService);

  sideBarButtonClick() {
    this.sidenavHeaderService.toggle();
  }
}
