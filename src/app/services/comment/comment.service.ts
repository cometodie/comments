import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as Echo from 'laravel-echo';
import { LoginService } from '../login/login.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentService {
  public url = 'http://pusher.cpl.by:6020';
  public socket;
  private token;
  public echo: any;

  public publicChannel:Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, private loginService: LoginService) {
    this.token = loginService.getUser().api_token;
    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: this.url,
      auth: {
        headers: {
          Authorization: this.token,
        },
      },
    })
    this.publicPushChannel();
  }

  public getComments(api_token: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_url}/comment?api_token=${api_token}`);
  }

  public addComment(title: string, message: string, api_token: string) {
    return this.httpClient.post(`${environment.api_url}/comment`, { title, message, api_token });
  }

  public deleteComment(id_comment: number, api_token: string) {
    return this.httpClient.delete(`${environment.api_url}/comment/${id_comment}?api_token=${api_token}`);
  }

  private publicPushChannel() {
    this.echo.channel(`public-push`)
    .listen('PublicPush', (comment) => {
        console.log(comment);
        this.publicChannel.next(comment);
    });
  }
}
