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

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    children:[
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ]
  },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    FormsModule,
    HttpModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
