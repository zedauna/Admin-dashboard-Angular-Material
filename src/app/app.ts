import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {Header} from './components/UI-header/header';
import {Sidenav} from './components/UI-sidenav/sidenav';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [MatButtonModule,Header,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
