import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from '../../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarService } from '../../../services/sidebar/sidebar.service';
import { SharedModule } from '../../../shared/shared.modules';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [MatToolbarModule, SharedModule],
  exports: [ToolbarComponent],
  providers: [LoginService, SideBarService]
})
export class ToolBarModule {}
