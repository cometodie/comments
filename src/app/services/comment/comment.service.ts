import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class CommentService {
  public url = 'pusher.cpl.by:6001';
  public socket;

  constructor(private httpClient: HttpClient) {
    this.socket = io(this.url); 
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

  getMessages(){
    const observable = new Observable(observer => {
      this.socket.emit(`public-push`, data => {
        debugger;
      })
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  public sendMessage(){
    const observable = new Observable(observer => {
      this.socket.emit(`push/wl2AknXY5i89dy6jd62e`, {title:'test', message:'msggg'}, () => {
        debugger;
      })
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
