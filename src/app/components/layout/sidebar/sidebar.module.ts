import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from '../../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarService } from '../../../services/sidebar/sidebar.service';
import { RouterModule } from '@angular/router';
import { ProfileNewIconComponent } from '../icons/profile-new-icon/profile-new-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileIconComponent } from '../icons/profile-icon/profile-icon.component';
import { LogoutIconComponent } from '../icons/logout-icon/logout-icon.component';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ProfileNewIconComponent,
    ProfileIconComponent,
    HomeIconComponent,
    LogoutIconComponent
  ],
  imports: [MatToolbarModule, MatIconModule, FormsModule, BrowserModule, MatSidenavModule, RouterModule],
  exports: [SidebarComponent],
  providers: [LoginService, SideBarService]
})
export class SideBarModule {}
