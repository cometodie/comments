import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  public getComments(api_token: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_url}/comment?api_token=${api_token}`);
  }

  public addComment(title: string, message: string, api_token: string) {
    return this.httpClient.post(`${environment.api_url}/comment`, { title, message, api_token });
  }
  
  public deleteComment(id_comment: number, api_token: string) {
    return this.httpClient.delete(`${environment.api_url}/comment/${id_comment}?api_token=${api_token}`);
  }

}
