import { Component, input} from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home-base-pie',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './base-pie-home.html',
  styleUrl: './base-pie-home.scss',
})
export class BasePieHome {

pieChartPlugins = [];
pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };
  pieChartLegend = input<boolean>(true);
  pieChartLabels = input<string[]>(["Mobiles","Fashion","Electronics"]);

  pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  pieCartDatas=input(this.pieChartDatasets)


}
