import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class AnswerService {

  constructor(private httpClient: HttpClient) {}

  public getComments(api_token: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_url}/comment?api_token=${api_token}`);
  }

  public addComment(title: string, message: string, api_token: string) {
    return this.httpClient.post(`${environment.api_url}/comment`, { title, message, api_token });
  }
}
