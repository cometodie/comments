import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { CommentService } from '../comment/comment.service';
import { LoginService } from '../login/login.service';

@Injectable()
export class AnswerService {
  public privateChannel: Subject<any> = new Subject<any>();
  private userId;

  constructor(
    private httpClient: HttpClient,
    private commentService: CommentService,
    private loginService: LoginService
  ) {
    this.userId = loginService.getUser().id;

    this.privatePushChannel();
  }

  public getAnswersById(id: number, api_token: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_url}/comment/${id}/answer?api_token=${api_token}`);
  }

  public addAnswer(id: number, message: string, api_token: string) {
    return this.httpClient.post(`${environment.api_url}/comment/${id}/answer?api_token=${api_token}`, { message });
  }

  private privatePushChannel() {
    this.commentService.echo.channel(`private-user.${this.userId}`).listen('UserPush', answer => {
      this.privateChannel.next(answer);
    });
  }
}
