import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Header } from '@app/components/UI-header/header.js';
import { Sidenav } from '@app/components/UI-sidenav/sidenav.js';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [MatButtonModule,Header,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
