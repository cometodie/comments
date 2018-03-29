import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { User } from '../../../models/user';
import { SideBarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  private user: User = null;
  private isAuth: boolean = false;
  private isOpen: boolean = false;
  @ViewChild('drawer') drawer;

  constructor(private loginService: LoginService, private sideBarSerivce: SideBarService) {}

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.loginService.updateUser.subscribe(user => {
      this.user = user;
      this.isAuth = true;
    });
  }

  getAvatar(): string {
    if (this.user) {
      if (this.user.avatar.endsWith('.png')) {
        return this.user.avatar;
      } else if (this.user.avatar.endsWith('.jpg')) {
        return this.user.avatar;
      } else if (this.user.avatar.endsWith('.bmp')) {
        return this.user.avatar;
      } else {
        return 'assets/noimage.png';
      }
    }
  }

  toggleSideBar(): void {
    this.sideBarSerivce.toggleSideBar();
    this.isOpen = !this.isOpen;
  }
}
