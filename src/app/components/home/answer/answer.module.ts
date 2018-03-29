import { NgModule } from '@angular/core';
import { AnswerComponent } from './answer.component';
import { AnswerService } from '../../../services/answer/answer.service';
import { SharedModule } from '../../../shared/shared.modules';

@NgModule({
  declarations: [AnswerComponent],
  imports: [SharedModule],
  exports: [AnswerComponent],
  providers: [AnswerService]
})
export class AnswerModule {}
