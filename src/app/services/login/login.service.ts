import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private token: string = null;
  public updateUser: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.api_url}/auth/login`, { email, password });
  }

  public registry(name: string, email: string, password: string, avatar: string = ''): Observable<User> {
    return this.httpClient.post<User>(`${environment.api_url}/auth/register`, { name, email, password, avatar });
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.updateUser.next(user);
  }

  public getUser(): User{
    return JSON.parse(localStorage.getItem('user'));
  }

  public logout() {
    this.setToken(null);
    this.setUser(null);
  }

  get isAuthorized(): boolean {
    return JSON.parse(localStorage.getItem('user')) != null;
  }
}
