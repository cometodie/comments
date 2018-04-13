import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../../../services/answer/answer.service';
import { User } from '../../../models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() commentId: number;
  @Input() user: User;
  @Input() newAnswer: any;
  form: FormGroup;
  public answers: any[] = [];
  private answer = new FormControl('', Validators.required);

  constructor(private answerService: AnswerService, private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.form = fb.group({
      answer: this.answer
    });
    answerService.privateChannel.subscribe((action: any) => {
      if(this.commentId == action.data.answer.comment_id){
        this.answers.unshift(action.data.answer);
      }
    })
  }

  ngOnInit() {
    this.answerService.getAnswersById(this.commentId, this.user.api_token).subscribe(data => {
      this.answers = data;
    });
  }

  submitForm(event, value) {
    this.answerService.addAnswer(this.commentId, value.answer, this.user.api_token).subscribe(
      answer => {
        this.answers.unshift(answer);
        this.openSnackBar(`Your answer successfully added!`, 'Close');
      },
      error => {
        this.openSnackBar(`Something wrong!`, 'Close');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
