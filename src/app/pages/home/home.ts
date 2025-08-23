import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Table } from '@app/components/home-table/table';
import {BaseChartHome} from '@app/components/home-base-chart/base-chart-home';
import {BasePieHome} from '@app/components/home-base-pie/base-pie-home';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [MatCardModule,MatIcon,Table,BaseChartHome,BasePieHome],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
