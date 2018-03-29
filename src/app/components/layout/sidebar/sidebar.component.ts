import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarService } from '../../../services/sidebar/sidebar.service';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawer;

  constructor(private sideBarService: SideBarService, private loginService: LoginService) {}

  ngOnInit() {
    this.sideBarService.toggledSideBar.subscribe((toggle: boolean) => {
      // debugger;
      this.drawer.toggle();
    });
  }

  isAuth(): boolean{
    return this.loginService.isAuthorized;
  }
}
