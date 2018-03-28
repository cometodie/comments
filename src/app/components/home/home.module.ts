import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [FormsModule, HttpModule, ReactiveFormsModule],
  providers: []
})
export class HomeModule {}
