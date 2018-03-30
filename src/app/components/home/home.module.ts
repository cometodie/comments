import { NgModule } from '@angular/core';
import { AnswerModule } from './answer/answer.module';
import { SharedModule } from '../../shared/shared.modules';
import { CommentModule } from './comment/comment.module';
import { CommentService } from '../../services/comment/comment.service';

@NgModule({
  declarations: [],
  imports: [SharedModule, CommentModule],
  exports: [CommentModule],
  providers: [CommentService]
})
export class HomeModule {}
