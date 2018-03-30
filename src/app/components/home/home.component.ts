import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Comment } from '../../models/comment';
import { debug } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  private user: User = null;
  private comments: any[] = [];

  private title = new FormControl('', [Validators.required, this.ValidateUrl]);
  private comment = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private commentService: CommentService,
    public snackBar: MatSnackBar
  ) {
    this.form = fb.group({
      title: this.title,
      comment: this.comment
    });
  }

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.commentService.getComments(this.user.api_token).subscribe(comments => {
      this.comments = comments.data;
    });
  }

  ValidateUrl(control: AbstractControl) {
    if (control.value.length <= 3) {
      return { title: true };
    }
    return null;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  deleteComment(id) {
    this.comments = this.comments.filter(el => {
      return this.getRealId(el) != id;
    });
  }

  getRealId(comment) {
    return comment.hasOwnProperty('id') ? comment.id : comment.comment_id;
  }

  submitForm(event, value) {
    this.commentService.addComment(value.title, value.comment, this.user.api_token).subscribe(
      comment => {
        this.comments.unshift({
          ...comment,
          user: { ...this.user }
        });
        this.openSnackBar(`Your comment successfully added!`, 'Close');
      },
      error => {
        this.openSnackBar(`Something wrong!`, 'Close');
      }
    );
  }
}
