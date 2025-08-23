import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { barChartData } from '../../models/baseChartHome.model.js';

@Component({
  selector: 'app-home-base-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './base-chart-home.html',
  styleUrl: './base-chart-home.scss',
})
export class BaseChartHome {
  // @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective;
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartType: ChartType = 'bar';
  public barChartData: ChartData = barChartData;
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // resizeDelay: 5,
    // aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
}
