import { NgModule } from '@angular/core';
import { AnswerModule } from './answer/answer.module';
import { SharedModule } from '../../shared/shared.modules';

@NgModule({
  declarations: [],
  imports: [SharedModule, AnswerModule],
  exports: [AnswerModule],
  providers: []
})
export class HomeModule {}
