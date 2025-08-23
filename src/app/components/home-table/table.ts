import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ELEMENT_DATA } from '../../models/periodic.model.js';

@Component({
  selector: 'app-home-table',
  standalone:true,
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = ELEMENT_DATA;
}
