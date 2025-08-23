export type ChartDatasetType ={
  data: number[];
  label: string;
  type?: string;
  borderWidth?: number;
  yAxisID?: string;
}

export type ChartDatasets ={
  labels:string[];
  datasets:ChartDatasetType[]
}
