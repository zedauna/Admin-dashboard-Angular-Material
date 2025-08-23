import { sidenavHeaderService } from '../../services/sidenav/sidenav-header';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-UI-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatListModule,
    MatIcon,
    LayoutModule,
    RouterLink,
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav implements OnInit {
  private BreakpointObserver = inject(BreakpointObserver);
  private sidenavHeaderService: sidenavHeaderService=inject(sidenavHeaderService);
  isSideOpen: boolean = true;

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;

  ngOnInit() {
    this.sidenavHeaderService.sideNavToggleSubject.subscribe(() => {
      this.drawer?.toggle();
    });

    this.BreakpointObserver.observe([Breakpoints.XSmall,Breakpoints.Small]).subscribe((result)=>{
      if (this.BreakpointObserver.isMatched([Breakpoints.XSmall,Breakpoints.Small])){
        this.isSideOpen=false;
      }else{
        this.isSideOpen=true;
      }
    })

  }
}
