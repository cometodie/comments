import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../../../services/comment/comment.service';
import { User } from '../../../models/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  @Input() user: User;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private commentService: CommentService, public snackBar: MatSnackBar) {}

  ngOnInit() {}

  getRealId(comment) {
    return comment.hasOwnProperty('id') ? comment.id : comment.comment_id;
  }

  isOwnComment(comment) {
    return comment.user.api_token !== this.user.api_token;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  deleteComment(comment) {
    let id = this.getRealId(comment);
    this.commentService.deleteComment(id, this.user.api_token).subscribe(
      result => {
        this.delete.emit(id);
        this.openSnackBar(`Comment successfully deleted!`, 'Close');
      },
      error => {
        this.openSnackBar(`You can delete only you'r comment!`, 'Close');
      }
    );
  }
}
