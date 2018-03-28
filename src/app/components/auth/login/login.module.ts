import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../../services/login/login.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [HttpModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  exports: [MatCardModule, MatInputModule, MatButtonModule],
  providers: [LoginService]
})
export class LoginModule {}
