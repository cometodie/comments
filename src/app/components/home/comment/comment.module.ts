import { NgModule } from '@angular/core';
import { AnswerService } from '../../../services/answer/answer.service';
import { SharedModule } from '../../../shared/shared.modules';
import { CommentComponent } from './comment.component';
import { CommentService } from '../../../services/comment/comment.service';
import { AnswerModule } from '../answer/answer.module';

@NgModule({
  declarations: [CommentComponent],
  imports: [SharedModule, AnswerModule],
  exports: [CommentComponent, AnswerModule],
  providers: [CommentService]
})
export class CommentModule {}
