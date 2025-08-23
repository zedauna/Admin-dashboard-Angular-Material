import { ChartData } from "chart.js";
import { ChartDatasets } from "../interfaces/chartDataset.interface.js";

export const barChartData :ChartData = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales A'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B'},
  ],
};