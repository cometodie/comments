import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as Echo from 'laravel-echo';

@Injectable()
export class CommentService {
  public url = 'http://pusher.cpl.by:6020';
  public socket;
  private echo: any;

  constructor(private httpClient: HttpClient) {
     
    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: this.url,
      auth: {
        headers: {
          Authorization: 'saidydsyuaXY5i89dy6jd62e',
        },
      },
    })
    console.log(this.echo);
    this.getMessages();
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

  getMessages() {
    this.echo.channel(`public-push`)
    .listen('PublicPush', (e) => {
        console.log(e);
        debugger;
    });
  }

  public sendMessage() {}
}
