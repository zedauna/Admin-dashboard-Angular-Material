import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {UsersServiceShared} from '../../services/users/users-service-shared';
import {User} from '../../models/users.model';
import {genderCount} from '../../utils/functions';


@Component({
  selector: 'app-client-gender-pie',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie-client-gender.html',
  styleUrl: './pie-client-gender.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieClientGender {
  //data shared
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);
  users:Signal<User[]>= computed(()=>{
    return this.UsersServiceShared.usersJson().users;
  })

  currentDataSelector=computed(() =>{
   return this.users().map(({ gender }) => ({
      gender,
    }));
  })

  currentDataSelectorReduce = computed(()=>genderCount(this.currentDataSelector()));
  pieChartLabels = computed(()=>{return Object.keys(this.currentDataSelectorReduce())});
  pieChartLegend = signal<boolean>(true);

  newData = computed(()=> {return Object.values<number>(this.currentDataSelectorReduce())});
  datasets = computed(() => [{
      data: this.newData(),
      backgroundColor: ['#36A2EB', '#FF6384'],
    },
  ]);

  pieChartPlugins = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  pieCartDatas = computed<ChartData<'pie', number[], string>>(()=>({
    labels:this.pieChartLabels(),
    datasets: this.datasets()
    }));

  constructor() {
    effect(()=>{
      // console.home-table(this.usersJson());
      // console.home-table(this.currentDataSelectorReduce())
      //console.log(this.newData())
    })

  }
}
