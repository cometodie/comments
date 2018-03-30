import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginModule } from './components/auth/login/login.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './services/guard/guard';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CommentService } from './services/comment/comment.service';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ToolBarModule } from './components/layout/toolbar/toolbar.module';
import { SideBarModule } from './components/layout/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { LoginService } from './services/login/login.service';
import { ProfileIconComponent } from './components/layout/icons/profile-icon/profile-icon.component';
import { MatIconModule } from '@angular/material';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './shared/shared.modules';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', pathMatch: 'full', redirectTo: '/home' }]
  },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RegistrationComponent, LogoutComponent],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,
    HttpClientModule,
    ToolBarModule,
    SideBarModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
