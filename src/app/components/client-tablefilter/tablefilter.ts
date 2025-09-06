import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject, Signal,
  signal,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {User} from '../../models/users.model';
import {UsersServiceShared} from '../../services/users/users-service-shared';


@Component({
  selector: 'app-client-tablefilter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './tablefilter.html',
  styleUrl: './tablefilter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tablefilter implements AfterViewInit {
  //data shared
  private UsersServiceShared:UsersServiceShared=inject(UsersServiceShared);
  users:Signal<User[]>= computed(()=>{
    return this.UsersServiceShared.usersJson().users;
  })

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  total=computed(()=> {return this.users().length})

  usersDataSelector = computed(()=>{
    return this.users().map((user: { firstName: any; lastName: any; age: any; phone: any; })=>({
      firstName:user.firstName,
      lastName:user.lastName,
      age:user.age,
      phone:user.phone,
    }))
  });

  displayedColumns = computed(() => {
    const data =this.usersDataSelector()[0];
    return data ? Object.keys(data) : []
  });

  columnsToDisplay = computed(() => {
    return this.displayedColumns().slice();
  });

    /**
   * TODO pas mutuable pour la pagination
   */
  // dataSource = computed(() => {
  //   const data=this.usersDataSelector();
  //   return data ? new MatTableDataSource(data) : new MatTableDataSource([])
  // });

  dataSource = signal(new MatTableDataSource());

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator;
    this.dataSource().sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource().filter = filterValue.trim().toLowerCase();
  }

  constructor() {
    effect(() => {
      // console.home-table(this.users())

      /**
       * TODO MAJ de l'objet dataSource
       */
      this.dataSource.update(ds=>{
        ds.data=this.usersDataSelector();
        return ds;
      })
    });
  }


  viewUser(id: number) {

  }

  editUser(id: number) {

  }

}
