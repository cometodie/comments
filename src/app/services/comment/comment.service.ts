import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  constructor() {}
  private url: string = 'http://pusher.cpl.by/api/v1/comment';
  private socket: any;

  public init() {
    // this.socket = io(this.url);
    // this.socket.on( (data) => {
    //   debugger;
    // });
  }
}
