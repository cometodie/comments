import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { LoginService } from '../../services/login/login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Comment } from '../../models/comment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('commentState', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ])
        )
      ]),
      transition('* => void', [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  public user: User = null;
  public comments: any[] = [];

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
    this.commentService
      .getComments(this.user.api_token)
      .subscribe(comments => {
        this.comments = comments.data;
      });
    // this.commentService.getMessages().subscribe(data => {
    //   debugger;
    // })
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
      return el.comment_id != id;
    });
  }

  submitForm(event, value) {
    this.commentService.addComment(value.title, value.comment, this.user.api_token).pipe(map((el:any) => {
      el.comment_id = el.id;
      delete el.id;
      return el;
    })).subscribe(
      (comment:any) => {
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
