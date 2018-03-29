import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [FormsModule, HttpModule, MatListModule, MatCardModule],
  exports: [MatListModule, MatCardModule],
  providers: []
})
export class HomeModule {}
