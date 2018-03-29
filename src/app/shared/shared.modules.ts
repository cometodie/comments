import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatSnackBarModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    BrowserModule,
    MatDividerModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    BrowserModule,
    MatDividerModule,
    HttpModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    ReactiveFormsModule
    ],
  providers: []
})
export class SharedModule {}
